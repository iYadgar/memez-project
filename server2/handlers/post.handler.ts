import {Request, Response} from "express";
import {IMainController}   from "../controllers/main.controller";


//get all posts
export const getPostsHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const
			posts        = await this.postController.getPosts(),
			likePromises = posts.map(post =>)
		return res.send()

	} catch (err) {
		return res.status(404).send({msg: 'get posts was unsuccessful ' + err})
	}
}
//get specific post
export const getPostHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const post = await this.postController.getPost(req.params.id);
		return res.json(post).end();
	} catch (err) {
		return res.status(404).json({msg: 'Post was not found ' + err}).end()
	}


}

//creat a new post
export const createPostHandler = async function (this: IMainController, req: Request, res: Response) {
	const content: string = req.body.content;
	const user_id: string = req.body.user_id;
	try {
		const
			newPost = await this.postController.createPost(content, user_id);

		return res.json(newPost).end()

	} catch (err) {
		return res.status(404).json({msg: 'No post added' + err})
	}


}

//delete post
export const deletePostHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const postToDelete = await this.postController.deletePost(req.params.id);

		return res.json(postToDelete).end();
	} catch (e) {
		return res.status(404).send({msg: 'post was not deleted ' + e})
	}

}
