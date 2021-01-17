//region imports
import {BaseController, IBaseController}  from "./base.controller";
import {IPost}                            from "../../shared/types/Entities/IPost";
import {FindAndModifyWriteOpResultObject} from "mongodb";
import {IPostResponse}                    from "../../shared/types/Entities/IPostResponse";
import {IPostDB}                          from "../../shared/types/Entities/IPostDB";

//endregion


export interface IPostController extends IBaseController {
	savePost(post: IPostDB): Promise<IPostDB>

	getPosts(): Promise<IPostResponse[]>


	deletePost(post_id: string): Promise<any>

	updatePostContent(post_id: string, content: string): Promise<FindAndModifyWriteOpResultObject<IPost>>


}

export class PostController extends BaseController implements IPostController {

	constructor() {
		super();
	}

	async savePost(post: IPostDB): Promise<IPostDB> {

		return this.main.dbController.savePost(post)
	}

	async getPosts(): Promise<IPostResponse[]> {
		const
			posts: IPostDB[] = await this.main.dbController.getPosts(),
			posts_response   = (await Promise.all(
				[
					await Promise.all(
						posts.map(async (post: IPostDB) => {
							post.likes_amount = await this.main
								.likeController
								.getPostLikesAmount(post._id.toString())
							post.postedBy = await this.main
								.userController
								.getOneUser(post.user_id.toString())
							post.likedByCurrentUser = false
							return post
						})
					)

				]));
		// @ts-ignore
		return (posts_response).flat().slice().reverse()


	}


	async deletePost(post_id: string): Promise<any> {
		return this.main.dbController.deletePost(post_id)
	}

	async updatePostContent(post_id: string, content: string): Promise<FindAndModifyWriteOpResultObject<IPost>> {
		return this.main.dbController.updatePostContent(post_id, content)
	}


}

