import {Request, Response} from "express"
import {IMainController}   from "../controllers/main.controller";
import * as dayjs          from "dayjs";
import {ILike}             from "../../shared/types/Entities/ILike";


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
	const like: ILike = {
		timestamp: dayjs().format('DD.MM.YY'),
		userLiked: req.body.user_id,
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
/*export const unlikeHandler = async function (this: IMainController, req: Request, res: Response) {
 try {
 const
 deletedLike = await this.likeController.unLike(req.params.id);


 res.json(deletedLike).end()
 } catch (e) {
 res.status(404).json({msg: 'like was not deleted ' + e})
 }

 }*/


/*export const getLikeFromPostHandler = async function (this: IMainController, req: Request, res: Response) {
 try {
 const
 likesFromPost = await this.likeController.getLikeFromPost(req.params.post_id);

 res.json(likesFromPost).end();
 } catch (e) {
 res.status(404).json({msg: `didn't get likes` + e})
 }
 }*/

