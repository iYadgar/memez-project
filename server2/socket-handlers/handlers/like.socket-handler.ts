//region imports
import {IHttpController} from "../../controllers/http.controller";
import {IUser}           from "../../../shared/types/Entities/IUser";
import {Like}            from "../../types/entities/Like.entity";
//endregion


// Get all likes
export const getLikesHandler = async function (this: IHttpController, socket, data, req_id) {
	try {
		const likes = await this.main.likeController.getLikes()
		socket.emit('getLikes', likes)

	} catch (e) {
		socket.emit('getLikes', {msg: `Something went wrong` + e}, req_id)
	}
}

// Create new like
export async function createLikeHandler(this: IHttpController, socket, data, req_id) {
	const
		parsedData       = JSON.parse(data),
		userLiked: IUser = await this.main.userController.getOneUser(parsedData.user_id),
		like             = new Like(userLiked, parsedData.post_id)
	try {
		const
			newLike   = await this.main.likeController.saveLike(like),
			postLikes = await this.main.likeController.getPostLikesAmount(parsedData.post_id);
		//
		socket.emit('creatLike', {like: newLike, postLikeCount: postLikes}, req_id)
	} catch (e) {
		socket.emit('createLike', {msg: `Something went wrong` + e}, req_id)
	}

}

// Unlike post
export async function unlikeHandler(this: IHttpController, socket, data, req_id) {

	const
		parsedData   = JSON.parse(data),
		likeToDelete = await this.main.likeController.getOneLike(parsedData.id)
	try {
		const
			deletedLike = await this.main.likeController.unLike(parsedData.id),
			postLikes   = await this.main.likeController.getPostLikesAmount(likeToDelete.post_id);


		socket.emit('unlike', {deletedLike, postLikeCount: postLikes}, req_id)
	} catch (e) {
		socket.emit('unlike', {msg: `Something went wrong` + e}, req_id)
	}

}

export async function getUserLikesHandler(this: IHttpController, socket, data, req_id) {
	const parsedData = JSON.parse(data)
	try {
		const userLikes = await this.main.likeController.getUserLikes(parsedData.user_id);
		socket.emit('getUserLikes', userLikes, req_id)
	} catch (e) {
		socket.emit('getUserLikes', {msg: `Something went wrong` + e}, req_id)
	}
}


export const getPostLikesHandler = async function (this: IHttpController, socket, data, req_id) {
	const parsedData = JSON.parse(data)
	try {
		const
			likesFromPost = await this.main.likeController.getPostLikes(parsedData.post_id);

		socket.emit('getPostLikes', likesFromPost, req_id)
	} catch (e) {
		socket.emit('getPostLikes', {msg: `Something went wrong` + e}, req_id)
	}
}

