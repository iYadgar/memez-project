import {Request, Response} from "express"
import {IMainController}   from "../controllers/main.controller";
import {ILikeM}            from "../models/like.model";


// Get all likes
export const getLikesHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const likes = await this.likeController.getLikes()
		return res.send(likes);

	} catch (e) {
		return res.status(404).send({msg: 'like has not found' + e})
	}
}
// Get specific like
export const getLikeHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const like = await this.likeController.getLike(req.params.id)

		return res.json(like).end()

	} catch (e) {
		res.status(404).send({msg: 'like was not found'})
	}

}

// Create new like
export const createLikeHandler = async function (this: IMainController, req: Request, res: Response) {
	const user_id = req.body.user_id;
	const post_id = req.body.post_id;

	try {
		const
			newLike = await this.likeController.createLike(user_id, post_id);


		return res.json(newLike).end()


	} catch (e) {
		return res.status(404).json({msg: 'No like added'})
	}


}

// Unlike post
export const unlikeHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const deletedLike = await this.likeController.unLike(req.params.id)

		res.json(deletedLike).end()
	} catch (e) {
		res.status(404).json({msg: 'like was not deleted ' + e})
	}

}

export const getPostLikesHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const postLikes: ILikeM[] = await this.likeController.getPostLikes(req.params.post_id)
		console.log(postLikes)


		res.json(postLikes).end();
	} catch (e) {
		res.status(404).json({msg: `likes was not found ${e} `}).end()
	}
}
