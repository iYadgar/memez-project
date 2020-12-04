import {IUserController} from "../types/i-user.controller";
import {ILikeController} from "../types/i-like.controller";
import {IPostController} from "../types/i-post.controller";
import {IHttpController} from "../types/i-http.controller";

export class MainController {


	constructor(
		public userController: IUserController,
		public likeController: ILikeController,
		public postController: IPostController,
		public httpController : IHttpController
	) {
		this.userController.main = this;
		this.likeController.main = this;
		this.postController.main = this;
		this.httpController.main = this;

	}

	init(){
		this.httpController.init()
	}

}
