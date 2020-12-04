import dayjs     from 'dayjs';
import likeModel from "../models/like-model";
import userModel from "../models/user-model";
import postModel from "../models/post-model";


// Get all likes
export const getLikesService = async () => {
	const likes = await likeModel.find()
		.populate('postedBy')
		.populate('likedBy')
		.exec()
	return likes
}

// Get specific like
export const getLikeService = async (id: string) => {
	const like = await likeModel.findById(id)
		.populate('postedBy')
		.populate('likedBy')
		.exec()
	return like

}

// create new like
export const createLikeService = async (user_id: string, post_id: string) => {
	const newLike = await likeModel.create({
											   timestamp: dayjs().format('DD.MM.YY'),
											   userLiked: user_id,
											   postLiked: post_id

										   })
	return newLike


}

export const pushLikeToUserService = async (user_id: string, like: any) => {
	await userModel
		.findByIdAndUpdate(user_id,
						   {$push: {likes: like._id}},
						   {new: true, useFindAndModify: false})

}

export const pushLikeToPostService = async (post_id: string, like: any) => {
	await postModel
		.findByIdAndUpdate(post_id, {
							   $push: {likes: like._id}
						   },
						   {
							   new: true, useFindAndModify: false
						   })

}

//delete like
export const unlikeService = async (like_id: string) => {
	const likeToDelete = await likeModel.findByIdAndDelete(like_id, {
		useFindAndModify: false
	})
		.exec()
	return likeToDelete
}
