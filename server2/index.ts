import {LikeController} from "./controllers/like.controller";
import {MainController} from "./controllers/main.controller";
import {UserController} from "./controllers/user.controller";
import {PostController} from "./controllers/post.controller";

(async () => {
	const
		likeController = new LikeController(),
		postController = new PostController(),
		userController = new UserController(),
		mainController = new MainController(
			likeController,
			postController,
			userController
		)


})()
