import mongoose, {model} from "mongoose";

const Schema = mongoose.Schema;

const postModel = new Schema({
								 content : String,
								 postedBy: {
									 type: mongoose.Schema.Types.ObjectId,
									 ref : 'userModel'
								 },
								 date    : String,
								 time    : String,
								 likes   : [{
									 type: mongoose.Schema.Types.ObjectId,
									 ref : 'likeModel'
								 }]
							 })

export default model('postModel', postModel)
