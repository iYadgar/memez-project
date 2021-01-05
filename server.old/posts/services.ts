//region imports
import dayjs     from 'dayjs';
import postModel from './post-model'
import userModel from "../users/user-model";
import {IPost}   from "../../shared/types/Entities/IPost";
//endregion
 

// Get all posts
export const getPostsService = async () => {
	const posts = await postModel.find()
		.populate({
					  path    : 'likes',
					  populate: {
						  path : 'userLiked',
						  model: 'userModel'
					  }
				  })
		.populate('postedBy')
		.exec()
	return posts

}
// Get Specific post
export const getPostService = async (id: string) => {
	const post = await postModel.findById(id)
		.populate('likes')
		.populate('postedBy')
		.exec()
	return post

}

// Create new post
export const createPostService = async (content: string, user_id: string) => {
	const
		newPost = await postModel.create({
											 content : content,
											 postedBy: user_id,
											 date    : dayjs().format('DD.MM.YY'),
											 time    : dayjs().format('HH:mm')
										 });


	return newPost.populate('postedBy').execPopulate();
}


export const addPostToUserService = async (post : any, user_id: string) => {
	await userModel.findByIdAndUpdate(user_id,
									  {$push: {posts: post._id}},
									  {useFindAndModify: false}).exec()

}


// Delete post
export const deletePostService = async (post_id: string) => {
	return await postModel.findByIdAndDelete(post_id, {
		useFindAndModify: false
	})
		.exec()
}
