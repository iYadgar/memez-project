import {Request, Response}                                                     from "express";
import {createPostService, deletePostService, getPostService, getPostsService} from "./services";
import {IPost}                                                                 from "../../shared/types/Entities/IPost";
import exp                                                                     from "constants";

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

//creat a new post
export const createPostController = (req: Request, res: Response) => {
    const content: string = req.body.content;
    const user_id: string = req.body.user_id;


    const newPost: IPost | boolean = createPostService(content, user_id)

    return newPost ? res.json(newPost).end() : res.status(404).json({msg: 'No post added'})

}

//delete post
export const deletePostController = (req: Request, res: Response) => {

    const postToDelete = deletePostService(req.params.id)

    return postToDelete ? res.json(postToDelete).end() : res.status(404).json({msg: 'post was not deleted.'})
}
