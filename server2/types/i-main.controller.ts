import {ILikeController} from "./i-like.controller";
import {IPostController} from "./i-post.controller";
import {IUserController} from "./i-user.controller";

export interface IMainController {
	userController: IUserController
	postController: IPostController
	likeController: ILikeController
}
