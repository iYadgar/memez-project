import {Request, Response}                                                 from "express"
import {ILike}                                                             from "../../shared/types/Entities/ILike";
import {createLikeService, getLikeService, getLikesService, unlikeService} from "./services";

// Get all likes
export const getLikesController = (req: Request, res: Response) => {
    const likes: ILike[] = getLikesService()
    res.json(likes).end();
}
// Get specific like
export const getLikeController = (req: Request, res: Response) => {
    const like: ILike | boolean = getLikeService(req.params.id)

    return like ? res.json(like).end() : res.status(404).send({msg: 'like was not found'})
}

// Create new like
export const createLikeController = (req: Request, res: Response) => {
    const user_id = req.body.user_id;
    const post_id = req.body.post_id;

    const newLike: ILike | boolean = createLikeService(user_id, post_id);

    return newLike ? res.json(newLike).end() : res.status(404).json({msg: 'No like added'})
}

// Unlike post
export const unlikeController = (req: Request, res: Response) => {
    const deletedLike: ILike | boolean = unlikeService(req.params.id)

    return deletedLike ? res.json(deletedLike).end() : res.status(404).json({msg: 'like was not deleted'})
}
