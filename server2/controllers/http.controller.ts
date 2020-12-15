//region imports
import * as express from "express";
import {Express, Request, Response} from "express";
import * as events from 'events'
import {BaseController, IBaseController} from "./base.controller";
import {config} from "../config/config";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import {body, validationResult} from "express-validator";
import * as cookieParser from "cookie-parser";

//socket.io
import {Server as IOServer, Socket as SocketIO_Socket} from "socket.io";
import * as socketio from "socket.io";
import * as http from "http";
import * as Http from "http";

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
        await this.initSocketIO()
    }


    async initSocketIO() {
        const This = this;

        // @ts-ignore
        this.io_server = socketio(this.http_server);


        this.io_server.on("connection", function (socket: SocketIO_Socket) {
            This.sockets.push(socket);
            const idx = This.sockets.indexOf(socket);
            console.log(`SOCKET CONNECTED to slot ${idx}. Total ${This.sockets.length} clients connected.`);

            console.log(socket.connected, 'socket.connected');
            socket.on("disconnect", () => {
                    This.sockets.splice(idx, 1);
                    console.log(`SOCKET CLOSED in slot ${idx}. Total ${This.sockets.length} clients connected.`);
                }
            );

            socket.on('ping', () => {
                console.log('PING !!!!');
                socket.emit('pong')
            })


            socket.on('createPost', (params) => {
                console.log('createPost !!!!');
                console.log(params, 'params');
            })

            setTimeout(()=>{
                socket.emit('hello')
            }, 1000)

            // This.registeredEvents.forEach(ev =>
            // 	socket.on(ev.event_name, ev.fn.bind(This, socket))
            // );
        });


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
        this.express_app.post('/api/users', [
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
        this.express_app.post('/api/posts', [body('content').isLength({min: 1})],
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

    }
}
