import * as mongoose      from "mongoose";
import {Schema, Document} from "mongoose";
import {IUserM}           from "./user.model";
import {ILikeM}           from "./like.model";


export interface IPostM extends Document {
	content: string
	postedBy: IUserM
	date: string
	time: string
	likes: ILikeM[]

	pushLikeToPost(like_id: ILikeM['_id'])

	deleteLikeFromPost(like_id: ILikeM['_id'])

}


const PostModel: Schema = new Schema({
	content : String,
	postedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref : 'User'
	},
	date    : String,
	time    : String,
	likes   : [{
		type: mongoose.Schema.Types.ObjectId,
		ref : 'Like'
	}]

})

/*PostModel.methods.pushLikeToPost = function (like_id: ILikeM['_id']) {
	this.likes.push(like_id);
	return this.save()
}

PostModel.methods.deleteLikeFromPost = function (like_id: ILikeM['_id']) {
	const
		likeFound = this.likes.find(like => like_id === like._id),
		index     = this.likes.indexOf(likeFound);

	this.likes.splice(index, 1)
	return this.save()
}*/

export default mongoose.model<IPostM>('Post', PostModel)
