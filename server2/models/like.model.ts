import * as mongoose       from "mongoose";
import {Schema, Document}  from "mongoose";
import {IUserM}            from "./user.model";
import PostModel, {IPostM} from "./post.model";


export interface ILikeM extends Document {
	timestamp: string
	userLiked: IUserM
	postLiked: IPostM
}

const LikeModel: Schema = new Schema({
	timestamp: String,
	userLiked: {
		type: mongoose.Schema.Types.ObjectId,
		ref : 'User'
	},
	postLiked: {
		type: mongoose.Schema.Types.ObjectId,
		ref : 'Post'
	}
})


export default mongoose.model<ILikeM>('Like', LikeModel)
