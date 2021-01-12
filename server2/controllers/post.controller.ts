//region imports
import {BaseController, IBaseController}  from "./base.controller";
import {IPost}                            from "../../shared/types/Entities/IPost";
import {FindAndModifyWriteOpResultObject} from "mongodb";
import {IPostResponse}                    from "../../shared/types/Entities/IPostResponse";

//endregion


export interface IPostController extends IBaseController {
	savePost(post: IPost): Promise<any>

	getPosts(): Promise<IPost[]>


	deletePost(post_id: string): Promise<any>

	updatePostContent(post_id: string, content: string): Promise<FindAndModifyWriteOpResultObject<IPost>>


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

	async updatePostContent(post_id: string, content: string): Promise<FindAndModifyWriteOpResultObject<IPost>> {
		return this.main.dbController.updatePostContent(post_id, content)
	}
	


}

