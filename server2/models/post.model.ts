import * as mongoose      from "mongoose";
import {Schema, Document} from "mongoose";
import {IUserM}           from "./user.model";

export interface IPostM extends Document {
	content: string
	postedBy: IUserM
	date: string
	time: string

}


const PostModel: Schema = new Schema({
	content : String,
	postedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref : 'User'
	},
	date    : String,
	time    : String,

})


export default mongoose.model<IPostM>('Post', PostModel)
