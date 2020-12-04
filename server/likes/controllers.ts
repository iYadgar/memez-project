import {Request, Response} from "express"

import {
	createLikeService,
	getLikeService,
	getLikesService,
	pushLikeToPostService,
	pushLikeToUserService, unlikeService
}              from "./services";
import {ILike} from "../../shared/types/Entities/ILike";

// Get all likes
export const getLikesController = async (req: Request, res: Response) => {
	try {
		const likes = await getLikesService()
		return res.send(likes);

	} catch (e) {
		return res.status(404).send({msg: 'like has not found' + e})
	}
}
// Get specific like
export const getLikeController = async (req: Request, res: Response) => {
	try {
		const like = await getLikeService(req.params.id)

		return res.json(like).end()

	} catch (e) {
		res.status(404).send({msg: 'like was not found'})
	}

}

// Create new like
export const createLikeController = async (req: Request, res: Response) => {
	const user_id = req.body.user_id;
	const post_id = req.body.post_id;

	try {
		const newLike = await createLikeService(user_id, post_id);
		await pushLikeToPostService(post_id, newLike)
		await pushLikeToUserService(user_id, newLike)

		return res.json(newLike).end()


	} catch (e) {
		return res.status(404).json({msg: 'No like added'})
	}


}

// Unlike post
export const unlikeController = (req: Request, res: Response) => {
	try {
		const deletedLike = unlikeService(req.params.id)
		res.json(deletedLike).end()
	} catch (e) {
		res.status(404).json({msg: 'like was not deleted ' + e})
	}

}
