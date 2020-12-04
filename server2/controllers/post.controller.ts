import {IPostController} from "../types/i-post.controller";
import {BaseController}  from "./base.controller";
import {IMainController} from "../types/i-main.controller";

export class PostController extends BaseController implements IPostController {
	main : IMainController
	constructor() {
		super();

	}

}
