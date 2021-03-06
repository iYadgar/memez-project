//region imports
import {LikeController}          from "./controllers/like.controller";
import {MainController}          from "./controllers/main.controller";
import {UserController}          from "./controllers/user.controller";
import {PostController}          from "./controllers/post.controller";
import {HttpController}          from "./controllers/http.controller";
import {DBController}            from "./controllers/db.controller";
import {AuthController}           from "./controllers/auth.controller";
import {Google_storageController} from "./controllers/google_storage.controller";
//endregion
 

(async () => {
	const
		likeController = new LikeController(),
		postController = new PostController(),
		userController = new UserController(),
		httpController = new HttpController(),
		dbController   = new DBController(),
		authController = new AuthController(),
		googleStorageController = new Google_storageController(),
		mainController = new MainController(
			userController,
			likeController,
			postController,
			httpController,
			dbController,
			authController,
			googleStorageController
		);
	try {
		await mainController.init()
		console.log(('main controller has initialized'))
	} catch (e) {
		console.log(`failed to initialize main controller ${e} `);
	}


})()
