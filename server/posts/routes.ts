import {Express} from "express";
import {getPostController, getPostsController} from "./controllers";



export function postRoutes(app: Express) {
    //get all posts
    app.get('/api/posts', getPostsController)
    //get specific post
    app.get('/api/posts/:id', getPostController)
}
