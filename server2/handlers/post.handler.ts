import {Request, Response} from "express";
import {IMainController}   from "../controllers/main.controller";
import {IPost}             from "../../shared/types/Entities/IPost";
import {IUser}             from "../../shared/types/Entities/IUser";
import {Post}              from "../types/entities/Post.entity";


//get all posts
export const getPostsHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const
			posts          = await this.postController.getPosts(),
			posts_response = await Promise.all([
				await Promise.all(
					posts.map(async post => {
						post.likes_amount = await this.likeController.getPostLikesAmount(post._id.toString())
						return post
					})
				)
			]);


		return res.send(posts_response.flat().slice().reverse())

	} catch (err) {
		return res.status(404).send({msg: 'Something went wrong' + err})
	}
}


//create a new post
export async function createPostHandler(this: IMainController, req: Request, res: Response) {
	const
		userPosted: IUser = await this.userController.getOneUser(req.body.user_id),
		post: IPost       = new Post(req.body.content, userPosted);

	try {

		const
			newPost = await this.postController.savePost(post);
		return res.status(201).send(newPost);

	} catch (err) {
		return res.status(404).json({msg: 'No post added' + err})
	}


}

//delete post
export const deletePostHandler = async function (this: IMainController, req: Request, res: Response) {
	try {

		const
			[likesToDelete, postToDelete] = await Promise
				.all([this.likeController.deletePostLikes(req.params.id), this.postController.deletePost(req.params.id)])


		return res.json([postToDelete, `likes deleted ${likesToDelete} `]).end();
	} catch (e) {
		return res.status(404).send({msg: 'post was not deleted ' + e})
	}

}
