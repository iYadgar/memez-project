import {Express, Request, Response}      from "express";
import * as express                      from "express";
import * as HTTP                         from "http";
import * as HTTPS                        from "https";
import * as events                       from 'events'
import {BaseController, IBaseController} from "./base.controller";
import {config}                          from "../config/config";
import * as bodyParser                   from "body-parser";
import * as cors                         from "cors";


export interface IHttpController extends IBaseController {
	events: events.EventEmitter
	// app: Express  /// IMPLEMENTATION DETAIL  - DO NOT EXPOSE !
}


export class HttpController extends BaseController implements IHttpController {
	http_server: HTTP.Server | HTTPS.Server
	app: Express = express()
	events: events.EventEmitter = new events.EventEmitter();


	constructor() {
		super();
	}

	async init() {
		//middlewares
		this.app.use(bodyParser.json())
		this.app.use(cors())
		//**//

		this.registerEndpoints()

		//turn server.old on
		await this.runServer()
	}

	async runServer() {
		await this.app.listen(config.port, () => {
			console.log(`server is up on port ${config.port} `)
		})
	}

	registerEndpoints() {

		//get all users
		this.app.get('/api/users', (req: Request, res: Response) => {
			this.events.emit('all_users', req, res);
		})
		// get specific user
		this.app.get('/api/users/:id', (req: Request, res: Response) => {
			this.events.emit('user', req, res)
		})
		//create new user
		this.app.post('/api/users', (req: Request, res: Response) => {
			this.events.emit('create_user', req, res)
		})
		//get all posts
		this.app.get('/api/posts', (req: Request, res: Response) => {
			this.events.emit('all_posts', req, res)
		})
		//get specific post
		this.app.get('/api/posts/:id', (req: Request, res: Response) => {
			this.events.emit('post', req, res)
		})
		//upload new post
		this.app.post('/api/posts', (req: Request, res: Response) => {
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
		//get specific like
		this.app.get('/api/likes/:id', (req: Request, res: Response) => {
			this.events.emit('like', req, res)
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
		this.app.get('/api/likes/:post_id', (req: Request, res: Response) => {
			this.events.emit('post_likes', req, res)
		})


	}
}
