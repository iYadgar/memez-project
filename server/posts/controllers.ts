import {Request, Response}                                                                           from "express";
import {addPostToUserService, createPostService, deletePostService, getPostService, getPostsService} from "./services";


//get all posts
export const getPostsController = async (req: Request, res: Response) => {
	try {
		const posts = await getPostsService()
		return res.send(posts)

	} catch (err) {
		return res.status(404).send({msg: 'get posts was unsuccsesfull '})
	}
}
//get specific post
export const getPostController = async (req: Request, res: Response) => {
	try {
		const post = await getPostService(req.params.id);
		return res.json(post).end();
	} catch (err) {
		return res.status(404).json({msg: 'Post was not found'}).end()
	}


}

//creat a new post
export const createPostController = async (req: Request, res: Response) => {
	const content: string = req.body.content;
	const user_id: string = req.body.user_id;
	try {
		const newPost = await createPostService(content, user_id)

		await addPostToUserService(newPost, user_id)
		return res.json(newPost).end()

	} catch (err) {
		return res.status(404).json({msg: 'No post added'})
	}


}

//delete post
export const deletePostController = async (req: Request, res: Response) => {
	try {
		const postToDelete = await deletePostService(req.params.id)
		return res.send(postToDelete)
	} catch (e) {
		return res.status(404).send({msg: 'post was not deleted ' + e})
	}

}
