import {Request, Response}               from "express"
import {ILike}                           from "../../shared/types/Entities/ILike";
import {getLikeService, getLikesService} from "./services";


export const getLikesController = (req: Request, res: Response) => {
    const likes: ILike[] = getLikesService()
    res.json(likes).end();
}

export const getLikeController = (req: Request, res: Response) => {
    const like: ILike | boolean = getLikeService(req.params.id)

    return like ? res.json(like).end() : res.status(404).send({msg: 'like was not found'})
}
