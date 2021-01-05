//region imports
import {BaseController, IBaseController} from "./base.controller";
import {ILike}                           from "../../shared/types/Entities/ILike";
//endregion
 


export interface ILikeController extends IBaseController {
	getLikes(): Promise<ILike[]>

	saveLike(like: ILike): Promise<any>

	getPostLikesAmount(post_id: string): Promise<number>

	unLike(like_id: string)

	getPostLikes(post_id: string): Promise<ILike[]>

	getUserLikes(user_id: string): Promise<ILike[]>

	deletePostLikes(post_id: string): Promise<any>

	getOneLike(like_id: string): Promise<ILike>


}

export class LikeController extends BaseController implements ILikeController {
	constructor() {
		super();


	}

	async getLikes(): Promise<ILike[]> {
		return this.main.dbController.getLikes()

	}

	async saveLike(like: ILike): Promise<any> {
		return this.main.dbController.saveLike(like)
	}


	async unLike(like_id: string) {
		return this.main.dbController.unLike(like_id)
	}

	async getPostLikesAmount(post_id: string): Promise<number> {
		return this.main.dbController.getPostLikesAmount(post_id)
	}

	async getPostLikes(post_id: string): Promise<ILike[]> {
		return this.main.dbController.getPostLikes(post_id)
	}

	async getUserLikes(user_id: string): Promise<ILike[]> {
		return this.main.dbController.getUserLikes(user_id)
	}

	async deletePostLikes(post_id: string): Promise<any> {
		return this.main.dbController.deletePostLikes(post_id)
	}
	async getOneLike(like_id: string): Promise<ILike>{
		return this.main.dbController.getOneLike(like_id)
	}



}
