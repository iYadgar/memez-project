import {BaseController}  from "./base.controller";
import {ILikeController} from "../types/i-like.controller";
import {IMainController} from "../types/i-main.controller";

export class LikeController extends BaseController implements ILikeController {
	main: IMainController

	constructor() {
		super();


	}

}
