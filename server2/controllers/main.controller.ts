//region imports
import {BaseController, IBaseController}               from "./base.controller";
import {ILikeController}                               from "./like.controller";
import {IHttpController}                               from "./http.controller";
import {IDBController}                                 from "./db.controller";
import {IUserController}                               from "./user.controller";
import {IPostController}                               from "./post.controller";
import {IAuthController}                               from "./auth.controller";
import {loginHandler, logoutHandler}                   from "../ajax-handlers/login.handler";
import {getCurrentUserHandler, isAuthenticatedHandler} from "../ajax-handlers/auth.handler";
import {IGoogleStorageController}                      from "./google_storage.controller";
import {format}                                        from "url";

//endregion


export interface IMainController extends IBaseController {
	userController: IUserController
	postController: IPostController
	likeController: ILikeController
	httpController: IHttpController
	dbController: IDBController
	authController: IAuthController
	googleStorageController: IGoogleStorageController

}


export class MainController extends BaseController implements IMainController {

	constructor(
		public userController: IUserController,
		public likeController: ILikeController,
		public postController: IPostController,
		public httpController: IHttpController,
		public dbController: IDBController,
		public authController: IAuthController,
		public googleStorageController: IGoogleStorageController
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
		// Handle Login
		this.httpController.events.addListener('post_login', loginHandler.bind(this))
		// Handle logout
		this.httpController.events.addListener('get_logout', logoutHandler.bind(this))
		// Get current user
		this.httpController.events.addListener('get_currentUser', getCurrentUserHandler.bind(this))
		// handle Auth
		this.httpController.events.addListener('get_isAuthenticated', isAuthenticatedHandler.bind(this))
		// Upload photo
		this.httpController.events.addListener('post_uploadPhoto', (req, res, next) => {
			try {
				if (!req.file) {
					res.status(400).send('No file uploaded.');
					return
				}

				const
					blob       = this.googleStorageController.bucket.file(req.file.originalname),
					blobStream = blob.createWriteStream();

				blobStream.on('error', err => {
					next(err)
				})

				blobStream.on('finish', () => {
					const publicUrl = format(
						`https://storage.googleapis.com/${this.googleStorageController.bucket.name}/${blob.name}`
					)
					res.status(200).json(publicUrl).end()
				})
				blobStream.end(req.file.buffer)
			} catch (e) {
				res.status(500).send('something went wrong...', e)
			}
		})


	}

}
