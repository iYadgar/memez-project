import {Request, Response} from "express"
import {IMainController}   from "../controllers/main.controller";
import * as dayjs          from "dayjs";
import {IUser}             from "../../shared/types/Entities/IUser";


// Get all likes
export const getLikesHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const likes = await this.likeController.getLikes()
		return res.send(likes);

	} catch (e) {
		return res.status(404).send({msg: 'like has not found' + e})
	}
}

// Create new like
export const createLikeHandler = async function (this: IMainController, req: Request, res: Response) {
	const
		userLiked: IUser = await this.userController.getOneUser(req.body.user_id),
		like             = {
			timestamp: dayjs().format('DD.MM.YY'),
			userLiked: userLiked,
			postLiked: req.body.post_id,
		}

	try {
		const
			newLike = await this.likeController.saveLike(like);


		return res.json(newLike).end()


	} catch (e) {
		return res.status(404).json({msg: 'No like added'})
	}


}

// Unlike post
export const unlikeHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const
			deletedLike = await this.likeController.unLike(req.params.id);


		res.json(deletedLike).end()
	} catch (e) {
		res.status(404).json({msg: 'like was not deleted ' + e})
	}

}

export async function getUserLikesHandler(this: IMainController, req: Request, res: Response) {
	try {
		const userLikes = await this.likeController.getUserLikes(req.params.user_id);
		res.json(userLikes).end()
	} catch (e) {
		res.status(404).json({msg: 'user likes was not found' + e})
	}
}


export const getLikeFromPostHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const
			likesFromPost = await this.likeController.getPostLikes(req.params.post_id);

		res.json(likesFromPost).end();
	} catch (e) {
		res.status(404).json({msg: `didn't get likes` + e})
	}
}

