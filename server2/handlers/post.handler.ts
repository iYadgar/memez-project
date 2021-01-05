//region imports
import {Request, Response} from "express";
import * as jwt            from 'jsonwebtoken'
import {IMainController}   from "../controllers/main.controller";
import {IPost}             from "../../shared/types/Entities/IPost";
import {IUser}             from "../../shared/types/Entities/IUser";
import {Post}              from "../types/entities/Post.entity";
//endregion


//get all posts
export const getPostsHandler = async function (this: IMainController, req: Request, res: Response) {
	const
		token = req.cookies.jwt;

	let user_id;

	// check jwt exist & valid
	if (token) {
		jwt.verify(token, `idan's secret string`, (err, decodedToken) => {
			if (err) {

				return null
			}

			user_id = decodedToken.payload
		})
	}


	try {
		const
			posts          = await this.postController.getPosts(),
			posts_response = await Promise.all([
				await Promise.all(
					posts.map(async post => {
						post.likes_amount = await this.likeController.getPostLikesAmount(post._id.toString())
						const userLikes = await this.likeController.getUserLikes(user_id)
						/*userLikes.forEach(like => {
						 like.post_id === post._id ? post.currentUserLike = true : post.currentUserLike = false

						 })*/

						return post
					})
				)
			]);


		// @ts-ignore
		return res.send(posts_response.flat().slice().reverse())

	} catch (err) {
		return res.status(404).send({msg: 'Something went wrong' + err})
	}
}


//create a new post
export async function createPostHandler(this: IMainController, req: Request, res: Response) {
	const
		userPosted: IUser = await this.userController.getOneUser(req.body.user_id),
		post: IPost       = new Post(req.body.content, userPosted, req.body.postMeme);
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
				.all([
					this.likeController.deletePostLikes(req.params.id),
					this.postController.deletePost(req.params.id)])


		return res.json([postToDelete, `likes deleted ${likesToDelete.deletedCount} `]).end();
	} catch (e) {
		return res.status(404).send({msg: 'post was not deleted ' + e})
	}

}

export async function updatePostContentHandler(this: IMainController, req: Request, res: Response) {
	try {
		const response = await this.postController.updatePostContent(req.params.id, req.body.content)
		res.status(201).send({msg: 'post content was updated' + response})
	} catch (e) {
		res.status(500).send({msg: 'something went wrong...' + e})

	}
}


