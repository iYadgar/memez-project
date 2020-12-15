import {Request, Response} from "express"
import {IMainController}   from "../controllers/main.controller";
import {IUser}             from "../../shared/types/Entities/IUser";
import {Like}              from "../types/entities/Like.entity";


// Get all likes
export const getLikesHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const likes = await this.likeController.getLikes()
		return res.send(likes);

	} catch (e) {
		return res.status(404).send({msg: 'Something went wrong' + e})
	}
}

// Create new like
export async function createLikeHandler(this: IMainController, req: Request, res: Response) {
	const
		userLiked: IUser = await this.userController.getOneUser(req.body.user_id),
		like             = new Like(userLiked, req.body.post_id)
	try {
		const
			newLike   = await this.likeController.saveLike(like),
			postLikes = await this.likeController.getPostLikesAmount(req.body.post_id);
		//
		return res.json({newLike, postLikeCount: postLikes}).end()
	} catch (e) {
		return res.status(404).json({msg: 'No like added'})
	}

}

// Unlike post
export const unlikeHandler = async function (this: IMainController, req: Request, res: Response) {

	const likeToDelete = await this.likeController.getOneLike(req.params.id)
	try {
		const
			deletedLike = await this.likeController.unLike(req.params.id),
			postLikes   = await this.likeController.getPostLikesAmount(likeToDelete.post_id);

		
		res.json({deletedLike, postLikeCount: postLikes}).end()
	} catch (e) {
		res.status(404).json({msg: 'like was not deleted ' + e})
	}

}

export async function getUserLikesHandler(this: IMainController, req: Request, res: Response) {
	try {
		const userLikes = await this.likeController.getUserLikes(req.params.user_id);
		res.json(userLikes).end()
	} catch (e) {
		res.status(404).json({msg: 'Something went wrong' + e})
	}
}


export const getPostLikesHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const
			likesFromPost = await this.likeController.getPostLikes(req.params.post_id);

		res.json(likesFromPost).end();
	} catch (e) {
		res.status(404).json({msg: `Something went wrong` + e})
	}
}

