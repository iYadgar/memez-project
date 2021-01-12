import {APIEvent}                  from "../../shared/types/api/api-event";
import {Socket as SocketIO_Socket} from "socket.io/dist/socket";
import {
	createPostHandler,
	deletePostHandler,
	getPostsHandler,
	updatePostHandler
}                                  from "./handlers/post.socket-handler";
import {
	createLikeHandler,
	getLikesHandler,
	getPostLikesHandler,
	getUserLikesHandler,
	unlikeHandler
}                                  from "./handlers/like.socket-handler";
import {
	createUserHandler,
	getUserHandler,
	getUsersHandler,
	updateUserPhotoHandler
}                                  from "./handlers/user.socket-handler";


export const event_mapper: { [event_name in APIEvent]: (socket: SocketIO_Socket, data: any, req_id: string) => void } = {

	createUser     : createUserHandler,
	getUser        : getUserHandler,
	getUserLikes   : getUserLikesHandler,
	getUsers       : getUsersHandler,
	updateUserPhoto: updateUserPhotoHandler,
	getLikes       : getLikesHandler,
	getPostLikes   : getPostLikesHandler,
	unlike         : unlikeHandler,
	createLike     : createLikeHandler,
	getPosts       : getPostsHandler,
	createPost     : createPostHandler,
	deletePost     : deletePostHandler,
	updatePost     : updatePostHandler,
	postsUpdate    : async function (socket, data, req_id) {

	}
}

