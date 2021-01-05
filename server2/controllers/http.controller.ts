//region imports
import * as express                               from "express";
import {Express, NextFunction, Request, Response} from "express";
import * as events                                from 'events'
import {BaseController, IBaseController}          from "./base.controller";
import {config}                                   from "../config/config";
import * as bodyParser                            from "body-parser";
import * as cors                                  from "cors";
import {body, validationResult}                   from "express-validator";
import * as cookieParser                          from "cookie-parser";
import * as Multer                                from 'multer'

//socket.io
import * as socketio                                   from "socket.io";
import {Server as IOServer, Socket as SocketIO_Socket} from "socket.io";
import * as http                                       from "http";
import {getUsersSocketHandler}                         from "../handlers/user.handler";
import {APIEvent}                                      from "../../shared/types/api/api-event";
import {IUser}                                         from "../../shared/types/Entities/IUser";
import {IPost}                                         from "../../shared/types/Entities/IPost";
import {Post}                                          from "../types/entities/Post.entity";


//endregion


const event_mapper: { [event_name in APIEvent]: (socket: SocketIO_Socket, data: any, req_id: string) => void } = {

	getPosts  : async function (this: HttpController, socket, data, req_id) {
		try {
			const
				posts          = await this.main.postController.getPosts(),
				posts_response = await Promise.all([
					await Promise.all(
						posts.map(async post => {
							post.likes_amount = await this.main
								.likeController
								.getPostLikesAmount(post._id.toString())
							return post
						})
					)
				]);


			// @ts-ignore
			socket.emit('getPosts', posts_response.flat().slice().reverse(), req_id)


		} catch (err) {
			console.log(err)
		}
	},
	getPost   : async function (this: HttpController, socket, data, req_id) {
	},
	createPost: async function (this: HttpController, socket, data, req_id) {
		const dataParsed = JSON.parse(data)
		const
			userPosted: IUser = await this.main.userController.getOneUser(dataParsed.user_id),
			post: IPost       = new Post(dataParsed.content, userPosted, dataParsed.postMeme);

		try {
			const
				newPost = await this.main.postController.savePost(post);

			socket.emit('createPost', newPost, req_id)

		} catch (err) {
			console.log(err)
		}
	},
	deletePost: async function (this: HttpController, socket, data, req_id) {
		const parsedData = JSON.parse(data)
		try {
			const
				[likesToDelete, postToDelete] = await Promise
					.all([
						this.main.likeController.deletePostLikes(parsedData.id),
						this.main.postController.deletePost(parsedData.id)])

			socket.emit('deletePost', [postToDelete, `likes deleted ${likesToDelete.deletedCount}`], req_id)
		} catch (e) {
			console.log('post was not deleted ' + e)
		}

	},
	updatePost: async function (this: HttpController, socket, data, req_id) {
		const parsedData = JSON.parse(data)
		try {
			const response = await this.main.postController.updatePostContent(parsedData.id, parsedData.content)

			socket.emit('updatePost', response, req_id)
		} catch (e) {
			console.log({msg: 'something went wrong...' + e})

		}
	},
}


export interface IHttpController extends IBaseController {
	events: events.EventEmitter
	// app: Express  /// IMPLEMENTATION DETAIL  - DO NOT EXPOSE !
}


export class HttpController extends BaseController implements IHttpController {
	private sockets: SocketIO_Socket[] = [];
	private io_server: IOServer;
	private http_server: http.Server;
	express_app: Express = express()
	events: events.EventEmitter = new events.EventEmitter();
	multer = Multer({
		storage: Multer.memoryStorage(),
		limits : {
			fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
		}
	})


	constructor() {
		super();

	}

	async init() {
		//middlewares
		this.express_app.use(bodyParser.json())
		this.express_app.use(cors({origin: true, credentials: true}))
		this.express_app.use(cookieParser())
		//**//

		this.registerEndpoints()

		//turn server on
		this.http_server = this.runServer();
		this.initSocketIO()
	}


	initSocketIO() {
		const This = this;
		// @ts-ignore
		this.io_server = socketio(this.http_server);

		this.io_server.on('connection', function (socket: SocketIO_Socket) {
			This.sockets.push(socket);
			const idx = This.sockets.indexOf(socket)
			socket.send('hello world')
			console.log(`SOCKET CONNECTED to slot ${idx}. Total ${This.sockets.length} clients connected.  `);

			console.log(socket.connected, 'socket.connected');


			socket.on('disconnect', () => {
				This.sockets.splice(idx, 1)
				console.log(`SOCKET CLOSED in slot ${idx}. Total ${This.sockets.length} clients connected `)
			})

			socket.on('ping', async () => {
				socket.emit('pong', 'pong')
			})

			socket.on('getUsers', async () => {
				console.log('getUsers');
				const response = await getUsersSocketHandler.call(This.main)
				socket.emit('getUsers', response)
			});

			Object
				.entries(event_mapper)
				.forEach(([event, fn]) => {
					socket.on(event, fn.bind(This, socket))
				})
		})
	}


	runServer(): http.Server {
		return this.express_app.listen(config.port, () => {
			console.log(`server is up on port ${config.port} `)
		})
	}


	registerEndpoints() {
		//get all users
		this.express_app.get('/api/users', (req: Request, res: Response) => {
			this.events.emit('all_users', req, res);
		})
		//create new user
		this.express_app.post('/api/users'
			,
			[
				body('email').isEmail(),
				body('name').isLength({min: 1}),
				body('password').isLength({min: 6})
			],
			(req: Request, res: Response) => {
				const errors = validationResult(req)
				if (!errors.isEmpty()) {
					return res.status(400).json({errors: errors.array()});
				}

				this.events.emit('create_user', req, res)
			})
		//get all posts
		this.express_app.get('/api/posts', (req: Request, res: Response) => {
			this.events.emit('all_posts', req, res)
		})
		//upload new post
		this.express_app.post('/api/posts',
			[body('content').isLength({min: 1})],
			(req: Request, res: Response) => {

				const errors = validationResult(req)
				if (!errors.isEmpty()) {
					return res.status(400).json({errors: errors.array()});
				}
				this.events.emit('upload_post', req, res)
			})
		//delete post
		this.express_app.delete('/api/posts/:id', (req: Request, res: Response) => {
			this.events.emit('delete_post', req, res)
		})
		//get all likes
		this.express_app.get('/api/likes', (req: Request, res: Response) => {

			this.events.emit('all_likes', req, res)
		})
		//create new like
		this.express_app.post('/api/likes', (req: Request, res: Response) => {
			this.events.emit('create_like', req, res)
		})
		//unlike
		this.express_app.delete('/api/likes/:id', (req: Request, res: Response) => {

			this.events.emit('delete_like', req, res)
		})
		//get likes from post
		this.express_app.get('/api/posts/likes/:post_id', (req: Request, res: Response) => {
			this.events.emit('post_likes', req, res)
		})
		//get User Likes
		this.express_app.get('/api/users/likes/:user_id', (req: Request, res: Response) => {
			this.events.emit('user_likes', req, res)
		})

		//handle Login
		this.express_app.post('/api/login', (req: Request, res: Response) => {
			this.events.emit('post_login', req, res)
		})

		//handle logout
		this.express_app.get('/api/logout', (req: Request, res: Response) => {
			this.events.emit('get_logout', req, res)
		})
		//get is authenticated
		this.express_app.get('/api/isAuthenticated', (req: Request, res: Response) => {
			this.events.emit('get_isAuthenticated', req, res)
		})
		//get current user
		this.express_app.get('/api/currentuser', (req: Request, res: Response) => {
			this.events.emit('get_currentUser', req, res)
		})

		//upload photo
		this.express_app.post('/api/uploadphoto', this.multer.single('file'),
			(req: Request, res: Response, next: NextFunction) => {
				this.events.emit('post_uploadPhoto', req, res, next)

			})
		//update user photo
		this.express_app.put('/api/users/updatephoto/:id', (req: Request, res: Response) => {
			this.events.emit('put_updateUserPhoto', req, res)
		})
		//update post content
		this.express_app.put(`/api/posts/updatepost/:id`, (req: Request, res: Response) => {
			this.events.emit('put_updatePostContent', req, res)
		})


	}

}
