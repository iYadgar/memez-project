import {BaseController, IBaseController} from "./base.controller";
import {ILikeM}                          from "../models/like.model";
import {IUserM}                          from "../models/user.model";
import {IPostM}                          from "../models/post.model";


export interface ILikeController extends IBaseController {
	getLikes(): Promise<ILikeM[]>;

	getLike(id: ILikeM['_id']): Promise<ILikeM>;

	createLike(user_id: IUserM['_id'], post_id: IPostM['_id']): Promise<ILikeM>;

	unLike(like_id: ILikeM['_id']): Promise<ILikeM>;

	getPostLikes(post_id: IPostM['_id']): Promise<ILikeM[]>
}

export class LikeController extends BaseController implements ILikeController {
	constructor() {
		super();


	}

	async getLikes(): Promise<ILikeM[]> {
		return await this.main.dbController.getLikes()
	}

	async getLike(id: ILikeM['_id']): Promise<ILikeM> {
		return await this.main.dbController.getLike(id)
	}

	async createLike(user_id: IUserM['_id'], post_id: IPostM['_id']): Promise<ILikeM> {
		return await this.main.dbController.createLike(user_id, post_id)
	}

	async unLike(like_id: ILikeM['_id']): Promise<ILikeM> {
		return this.main.dbController.unLike(like_id)
	}

	async getPostLikes(post_id: IPostM['_id']): Promise<ILikeM[]> {
		return await this.main.dbController.getPostLikes(post_id)
	}


}
