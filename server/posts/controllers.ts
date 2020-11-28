import {Request, Response} from "express";
import {getPostService, getPostsService} from "./services";

import {MOCK_POSTS} from "../../shared/mock/MOCK_POSTS";


export const getPostsController = (req: Request, res: Response) => {
    const posts = getPostsService()
    res.json(posts)
}
