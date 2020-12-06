import mongoose, {model} from "mongoose";

const Schema = mongoose.Schema;

const likeModel = new Schema({
								 timestamp: String,
								 userLiked: {
									 type: mongoose.Schema.Types.ObjectId,
									 ref : 'userModel'
								 },
								 postLiked: {
									 type: mongoose.Schema.Types.ObjectId,
									 ref : 'postModel'
								 }
							 })

export default model('likeModel', likeModel)
