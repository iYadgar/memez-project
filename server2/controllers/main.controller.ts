import {BaseController, IBaseController}                       from "./base.controller";
import {ILikeController}                                       from "./like.controller";
import {IHttpController}                                       from "./http.controller";
import {IDBController}                                         from "./db.controller";
import {createUserHandler, getUserHandler, getUsersHandler}    from "../handlers/user.handler";
import {createPostHandler, deletePostHandler, getPostsHandler} from "../handlers/post.handler";
import {
	createLikeHandler,
	getPostLikesHandler,
	getLikesHandler,
	getUserLikesHandler,
	unlikeHandler
}                                                              from "../handlers/like.handler";
import {IUserController}                                       from "./user.controller";
import {IPostController}                                       from "./post.controller";
import {IAuthController}                                       from "./auth.controller";
import {loginHandler, logoutHandler}                           from "../handlers/login.handler";
import {getCurrentUserHandler, isAuthenticatedHandler}         from "../handlers/auth.handler";


export interface IMainController extends IBaseController {
	userController: IUserController
	postController: IPostController
	likeController: ILikeController
	httpController: IHttpController
	dbController: IDBController
	authController: IAuthController

}


export class MainController extends BaseController implements IMainController {

	constructor(
		public userController: IUserController,
		public likeController: ILikeController,
		public postController: IPostController,
		public httpController: IHttpController,
		public dbController: IDBController,
		public authController: IAuthController
	) {
		super();

		this.userController.main = this;
		this.likeController.main = this;
		this.postController.main = this;
		this.httpController.main = this;
		this.dbController.main = this;
		this.authController.main = this;

	}

	async init(): Promise<void> {
		await this.dbController.init()
		await this.httpController.init()

		this.addEventListeners()


	}

	addEventListeners() {
		// Get all users
		this.httpController.events.addListener('all_users', getUsersHandler.bind(this))
		// Create new user
		this.httpController.events.addListener('create_user', createUserHandler.bind(this))
		// Get all posts
		this.httpController.events.addListener('all_posts', getPostsHandler.bind(this))
		// Create new post
		this.httpController.events.addListener('upload_post', createPostHandler.bind(this))
		// Delete Post
		this.httpController.events.addListener('delete_post', deletePostHandler.bind(this))
		// Get all likes
		this.httpController.events.addListener('all_likes', getLikesHandler.bind(this))
		// Create new like
		this.httpController.events.addListener('create_like', createLikeHandler.bind(this))
		// Delete like
		this.httpController.events.addListener('delete_like', unlikeHandler.bind(this))
		// Get likes from post
		this.httpController.events.addListener('post_likes', getPostLikesHandler.bind(this))
		// Get user likes
		this.httpController.events.addListener('user_likes', getUserLikesHandler.bind(this))
		// Handle Login
		this.httpController.events.addListener('post_login', loginHandler.bind(this))
		// Handle logout
		this.httpController.events.addListener('get_logout', logoutHandler.bind(this))
		// handle Auth
		this.httpController.events.addListener('get_isAuthenticated', isAuthenticatedHandler.bind(this))
		// Get current user
		this.httpController.events.addListener('get_currentUser', getCurrentUserHandler.bind(this))
	}

}
