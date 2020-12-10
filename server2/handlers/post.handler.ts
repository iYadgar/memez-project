import {Request, Response} from "express";
import {IMainController}   from "../controllers/main.controller";

import * as dayjs from "dayjs";
import {IPost}    from "../../shared/types/Entities/IPost";
import {IUser}    from "../../shared/types/Entities/IUser";


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


		return res.send(posts_response.flat())

	} catch (err) {
		return res.status(404).send({msg: 'get posts was unsuccessful ' + err})
	}
}
/*//get specific post
 export const getPostHandler = async function (this: IMainController, req: Request, res: Response) {
 try {
 const post = await this.postController.getPost(req.params.id);
 return res.json(post).end();
 } catch (err) {
 return res.status(404).json({msg: 'Post was not found ' + err}).end()
 }


 }*/

//creat a new post
export async function createPostHandler(this: IMainController, req: Request, res: Response) {
	const
		userPosted: IUser = await this.userController.getOneUser(req.body.user_id),
		post: IPost       = {
			content     : req.body.content,
			postedBy    : userPosted,
			date        : dayjs().format('DD.MM.YY'),
			time        : dayjs().format('HH:mm'),
			likes_amount: 0
		}

	try {

		const
			newPost = await this.postController.savePost(post);
		return res.json(newPost).end()

	} catch (err) {
		return res.status(404).json({msg: 'No post added' + err})
	}


}

//delete post
export const deletePostHandler = async function (this: IMainController, req: Request, res: Response) {
	try {

		const
			likesToDelete = await this.likeController.deletePostLikes(req.params.id),
			postToDelete  = await this.postController.deletePost(req.params.id);


		return res.json([postToDelete, `likes deleted ${likesToDelete} `]).end();
	} catch (e) {
		return res.status(404).send({msg: 'post was not deleted ' + e})
	}

}
