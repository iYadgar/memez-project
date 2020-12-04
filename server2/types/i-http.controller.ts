import {IBaseController} from "./i-base.controller";
import {IMainController} from "./i-main.controller";
import {Express}         from "express";

export interface IHttpController extends IBaseController {
	main: IMainController
	app: Express


}
