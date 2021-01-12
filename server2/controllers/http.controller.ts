//region imports
import * as express                               from "express";
import {Express, NextFunction, Request, Response} from "express";
import * as events                                from 'events'
import {BaseController, IBaseController}          from "./base.controller";
import {config}                                   from "../config/config";
import * as cors                                  from "cors";
import * as cookieParser                          from "cookie-parser";
import * as Multer                                from 'multer'

//socket.io
import * as socketio                                   from "socket.io";
import {Server as IOServer, Socket as SocketIO_Socket} from "socket.io";
import * as http                                       from "http";
import {event_mapper}                                  from "../socket-handlers/event-mapper";
import * as path                                       from "path";


//endregion


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
			fileSize: 20 * 1024 * 1024, // no larger than 20mb
		}
	})


	constructor() {
		super();

	}

	async init() {
		//middlewares
		this.express_app.use(express.json())
		this.express_app.use(cors({origin: true, credentials: true}))
		this.express_app.use(cookieParser())
		//**//


		this.registerEndpoints()

		//Production !
		this.express_app
			.use(express.static(path.join(__dirname, '../public')))
			.get('*', (req: Request, res: Response) => {
				res.sendFile(path.join(__dirname, '../public/index.html'))
			})

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


			socket.on('disconnect', () => {
				This.sockets.splice(idx, 1)
				console.log(`SOCKET CLOSED in slot ${idx}. Total ${This.sockets.length} clients connected `)
			})

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

		//handle Login
		this.express_app.post('/api/login', (req: Request, res: Response) => {
			this.events.emit('post_login', req, res)
		})

		//handle logout
		this.express_app.get('/api/logout', (req: Request, res: Response) => {
			this.events.emit('get_logout', req, res)
		})
		//get is authenticated
		this.express_app.get('/api/isAuthenticated', (req: Request, res: Response, next: NextFunction) => {
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


	}

}
