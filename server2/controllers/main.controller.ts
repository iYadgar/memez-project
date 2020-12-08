import {BaseController, IBaseController}    from "./base.controller";
import {ILikeController}                    from "./like.controller";
import {IHttpController}                    from "./http.controller";
import {IDBController}                      from "./db.controller";
import {createUserHandler, getUsersHandler} from "../handlers/user.handler";
import {createPostHandler, getPostsHandler} from "../handlers/post.handler";
import {createLikeHandler, getLikesHandler} from "../handlers/like.handler";
import {IUserController}                    from "./user.controller";
import {IPostController}                    from "./post.controller";


export interface IMainController extends IBaseController {
	userController: IUserController
	postController: IPostController
	likeController: ILikeController
	httpController: IHttpController
	dbController: IDBController

}


export class MainController extends BaseController implements IMainController {

	constructor(
		public userController: IUserController,
		public likeController: ILikeController,
		public postController: IPostController,
		public httpController: IHttpController,
		public dbController: IDBController
	) {
		super();

		this.userController.main = this;
		this.likeController.main = this;
		this.postController.main = this;
		this.httpController.main = this;
		this.dbController.main = this;

	}

	async init(): Promise<void> {
		await this.httpController.init()
		await this.dbController.init()


		this.addEventListeners()


	}

	addEventListeners() {
		// Get all users
		this.httpController.events.addListener('all_users', getUsersHandler.bind(this))
		// Get specific user
		/*this.httpController.events.addListener('user', getUserHandler.bind(this))*/
		// Create new user
		this.httpController.events.addListener('create_user', createUserHandler.bind(this))
		// Get all posts
		this.httpController.events.addListener('all_posts', getPostsHandler.bind(this))
		// Get specific post
		/*this.httpController.events.addListener('post', getPostHandler.bind(this))*/
		// Create new post
		this.httpController.events.addListener('upload_post', createPostHandler.bind(this))
		// Delete Post (Not working for some reason)
		/*this.httpController.events.addListener('delete_post', deletePostHandler.bind(this))*/
		// Get all likes
		this.httpController.events.addListener('all_likes', getLikesHandler.bind(this))
		// Get specific like
		/*this.httpController.events.addListener('like', getLikeHandler.bind(this))*/
		// Create new like
		this.httpController.events.addListener('create_like', createLikeHandler.bind(this))
		// Delete like
		/*this.httpController.events.addListener('delete_like', unlikeHandler.bind(this))*/
		// Get likes from post
		/*this.httpController.events.addListener('post_likes', getLikeFromPostHandler.bind(this))*/
	}

}
