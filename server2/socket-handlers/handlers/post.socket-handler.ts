import {IHttpController} from "../../controllers/http.controller";
import {IUser}           from "../../../shared/types/Entities/IUser";
import {IPost}           from "../../../shared/types/Entities/IPost";
import {Post}            from "../../types/entities/Post.entity";

export async function getPostsHandler(this: IHttpController, socket, data, req_id) {
	try {
		const
			posts          = await this.main.postController.getPosts(),
			posts_response = await Promise.all([
				await Promise.all(
					posts.map(async post => {
						post.likes_amount = await this.main
							.likeController
							.getPostLikesAmount(post._id.toString())
						return post
					})
				)
			]);


		// @ts-ignore
		socket.emit('getPosts', posts_response.flat().slice().reverse(), req_id)


	} catch (err) {
		console.log(err)
	}
}

export async function createPostHandler(this: IHttpController, socket, data, req_id) {
	const dataParsed = JSON.parse(data)
	const
		userPosted: IUser = await this.main.userController.getOneUser(dataParsed.user_id),
		post: IPost       = new Post(dataParsed.content, userPosted, dataParsed.postMeme);

	try {
		const
			newPost = await this.main.postController.savePost(post);

		socket.emit('createPost', newPost, req_id)

	} catch (err) {
		console.log(err)
	}
}

export async function deletePostHandler(this: IHttpController, socket, data, req_id) {
	const parsedData = JSON.parse(data)
	try {
		const
			[likesToDelete, postToDelete] = await Promise
				.all([
					this.main.likeController.deletePostLikes(parsedData.id),
					this.main.postController.deletePost(parsedData.id)])
		socket.emit('deletePost', [postToDelete, `likes deleted ${likesToDelete.deletedCount}`], req_id)
	} catch (e) {
		console.log('post was not deleted ' + e)
	}

}

export async function updatePostHandler(this: IHttpController, socket, data, req_id) {
	const parsedData = JSON.parse(data)
	try {
		const response = await this.main.postController.updatePostContent(parsedData.id, parsedData.content)

		socket.emit('updatePost', response, req_id)
	} catch (e) {
		console.log({msg: 'something went wrong...' + e})

	}
}
