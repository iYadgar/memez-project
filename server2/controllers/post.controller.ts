import {IPostM}                          from "../models/post.model";
import {IUserM}                          from "../models/user.model";
import {BaseController, IBaseController} from "./base.controller";


export interface IPostController extends IBaseController {
	getPosts(): Promise<IPostM[]>;

	getPost(id: IPostM['_id']): Promise<IPostM>;

	createPost(content: string, user_id: IUserM['_id']): Promise<IPostM>;

	deletePost(post_id: string): Promise<IPostM>;
}

export class PostController extends BaseController implements IPostController {

	constructor() {
		super();
	}

	async getPosts(): Promise<IPostM[]> {
		return await this.main.dbController.getPosts()


	}

	async getPost(id: IPostM['_id']): Promise<IPostM> {
		return await this.main.dbController.getPost(id);
	}

	async createPost(content: string, user_id: IUserM['_id']): Promise<IPostM> {

		return this.main.dbController.createPost(content, user_id)

	}

	async deletePost(post_id: string): Promise<IPostM> {
		return this.main.dbController.deletePost(post_id);

	}

}
