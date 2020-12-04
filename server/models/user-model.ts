import mongoose, {model} from "mongoose";

const Schema = mongoose.Schema


const userModel = new Schema({
										 name : String,
										 posts: [{
											 type: mongoose.Schema.Types.ObjectId,
											 ref : "postModel"
										 }],
										 likes: [{
											 type: mongoose.Schema.Types.ObjectId,
											 ref : "likeModel"
										 }]

									 })


export default model('userModel', userModel)
