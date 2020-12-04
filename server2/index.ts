import {LikeController} from "./controllers/like.controller";
import {MainController} from "./controllers/main.controller";
import {UserController} from "./controllers/user.controller";
import {PostController} from "./controllers/post.controller";
import {HttpController} from "./controllers/http.controller";

(async () => {
	const
		likeController = new LikeController(),
		postController = new PostController(),
		userController = new UserController(),
		httpController = new HttpController(),
		mainController = new MainController(
			likeController,
			postController,
			userController,
			httpController
		)




})()
