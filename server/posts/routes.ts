import {getPostsController} from "./controllers";
import {Express} from "express";


export function postRoutes(app: Express) {
    app.get('/api/posts', getPostsController)
}
