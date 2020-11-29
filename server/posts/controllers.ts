import {Request, Response} from "express";
import {getPostService, getPostsService} from "./services";

//get all posts
export const getPostsController = (req: Request, res: Response) => {
    const posts = getPostsService()
    res.json(posts).end()
}
//get specific post
export const getPostController = (req: Request, res: Response) => {
    const post = getPostService(req.params.id);
    return post ? res.json(post).end() : res.status(404).json({msg: 'Post was not found'}).end()


}
