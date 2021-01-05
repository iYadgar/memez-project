//region imports
import {BaseController, IBaseController} from "./base.controller";
import {IPost}                           from "../../shared/types/Entities/IPost";
//endregion
 



export interface IPostController extends IBaseController {
	savePost(post: IPost): Promise<any>

	getPosts(): Promise<IPost[]>



	deletePost(post_id: string): Promise<any>

}

export class PostController extends BaseController implements IPostController {

	constructor() {
		super();
	}

	async savePost(post: IPost): Promise<any> {
		return this.main.dbController.savePost(post)
	}

	async getPosts(): Promise<IPost[]> {
		return this.main.dbController.getPosts()
	}


	async deletePost(post_id: string): Promise<any> {
		return this.main.dbController.deletePost(post_id)
	}
	/*async updatePostLiked()*/


}

