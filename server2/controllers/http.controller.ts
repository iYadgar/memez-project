import * as express                      from "express";
import {Express, Request, Response}      from "express";
import * as events                       from 'events'
import {BaseController, IBaseController} from "./base.controller";
import {config}                          from "../config/config";
import * as bodyParser                   from "body-parser";
import * as cors                         from "cors";
import {body, validationResult}          from "express-validator";
import * as cookieParser                 from "cookie-parser";


export interface IHttpController extends IBaseController {
	events: events.EventEmitter
	// app: Express  /// IMPLEMENTATION DETAIL  - DO NOT EXPOSE !
}


export class HttpController extends BaseController implements IHttpController {

	app: Express = express()
	events: events.EventEmitter = new events.EventEmitter();


	constructor() {
		super();
	}

	async init() {
		//middlewares
		this.app.use(bodyParser.json())
		this.app.use(cors({origin: true, credentials: true}))
		this.app.use(cookieParser())
		//**//

		this.registerEndpoints()

		//turn server on
		this.runServer()
	}

	runServer() {
		this.app.listen(config.port, () => {
			console.log(`server is up on port ${config.port} `)
		})
	}

	registerEndpoints() {

		//get all users
		this.app.get('/api/users', (req: Request, res: Response) => {
			this.events.emit('all_users', req, res);
		})
		//create new user
		this.app.post('/api/users', [
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
		this.app.get('/api/posts', (req: Request, res: Response) => {
			this.events.emit('all_posts', req, res)
		})
		//upload new post
		this.app.post('/api/posts', [body('content').isLength({min: 1})],
			(req: Request, res: Response) => {

				const errors = validationResult(req)
				if (!errors.isEmpty()) {
					return res.status(400).json({errors: errors.array()});
				}
				this.events.emit('upload_post', req, res)
			})
		//delete post
		this.app.delete('/api/posts/:id', (req: Request, res: Response) => {
			this.events.emit('delete_post', req, res)
		})
		//get all likes
		this.app.get('/api/likes', (req: Request, res: Response) => {

			this.events.emit('all_likes', req, res)
		})
		//create new like
		this.app.post('/api/likes', (req: Request, res: Response) => {
			this.events.emit('create_like', req, res)
		})
		//unlike
		this.app.delete('/api/likes/:id', (req: Request, res: Response) => {

			this.events.emit('delete_like', req, res)
		})
		//get likes from post
		this.app.get('/api/posts/likes/:post_id', (req: Request, res: Response) => {
			this.events.emit('post_likes', req, res)
		})
		//get User Likes
		this.app.get('/api/users/likes/:user_id', (req: Request, res: Response) => {
			this.events.emit('user_likes', req, res)
		})

		//handle Login 
		this.app.post('/api/login', (req: Request, res: Response) => {
			this.events.emit('post_login', req, res)
		})

		//handle logout
		this.app.get('/api/logout', (req: Request, res: Response) => {
			this.events.emit('get_logout', req, res)
		})

	}
}
