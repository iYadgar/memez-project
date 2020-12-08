import * as mongoose      from "mongoose";
import {Schema, Document} from "mongoose";
import {IPostM}           from "./post.model";
import {ILikeM}           from "./like.model";


export interface IUserM extends Document {
	name: IUserM
	posts: IPostM[]
	likes: ILikeM[]

	pushPostToUser(post_id: IPostM['_id'])

	deletePostFromUser(post_id: IPostM['_id'])

	pushLikeToUser(post_id: ILikeM['_id'])

	deleteLikeFromUser(post_id: ILikeM['_id'])

}

const UserModel: Schema = new Schema({
	name : String,
	posts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref : "Post"
	}],
	likes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref : "Like"
	}]

})


UserModel.methods.pushPostToUser = function (post_id: IPostM['_id']) {
	this.posts.push(post_id)
	return this.save()
}
UserModel.methods.deletePostFromUser = function (post_id: IPostM['_id']) {
	const
		postFound = this.posts.find(post => post_id === post._id),
		index     = this.posts.indexOf(postFound);

	this.posts.splice(index, 1)
	return this.save()
}


UserModel.methods.pushLikeToUser = function (like_id: ILikeM['_id']) {
	this.likes.push(like_id)
	return this.save()
}
UserModel.methods.deleteLikeFromUser = async function (like_id: ILikeM['_id']) {
	const
		likeFound = this.likes.find(like => like_id === like._id),
		index     = this.likes.indexOf(likeFound);

	this.likes.splice(index, 1)
	return this.save()
}


export default mongoose.model<IUserM>('User', UserModel)

