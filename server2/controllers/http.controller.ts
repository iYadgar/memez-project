import express, {Express} from "express";
import {BaseController}   from "./base.controller";
import {IHttpController}  from "../types/i-http.controller";
import {IMainController}  from "../types/i-main.controller";
import {config}           from "../config/config";
import * as HTTP          from "http";
import * as HTTPS         from "https";


export class HttpController extends BaseController implements IHttpController {
	main: IMainController
	http_server: HTTP.Server | HTTPS.Server
	app: Express = express()


	constructor() {
		super();
	}

	init() {
		this.app.listen(config.port)
	}
}
