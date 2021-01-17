//region imports
import {IHttpController} from "../../controllers/http.controller";
import {Post}            from "../../types/entities/Post.entity";
import {IPostDB}         from "../../../shared/types/Entities/IPostDB";

//endregion


export async function getPostsHandler(this: IHttpController, socket, data, req_id) {
	try {
		const posts_response = await this.main.postController.getPosts()
		// @ts-ignore
		socket.emit('getPosts', posts_response, req_id)


	} catch (err) {
		console.log(err)
	}
}

export async function createPostHandler(this: IHttpController, socket, data, req_id) {
	const dataParsed = JSON.parse(data)
	const
		post: IPostDB = new Post(dataParsed.content, dataParsed.user_id, dataParsed.postMeme);

	try {
		const
			newPost: IPostDB = await this.main.postController.savePost(post);


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
