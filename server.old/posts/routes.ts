//region imports
import {Express}                                                                           from "express";
import {createPostController, deletePostController, getPostController, getPostsController} from "./controllers";
//endregion
 


export function postRoutes(app: Express) {
	//get all posts
	app.get('/api/posts', getPostsController)
	//get specific post
	app.get('/api/posts/:id', getPostController)
	//upload new post
	app.post('/api/posts', createPostController)
	//delete post
	app.delete('/api/posts/:id', deletePostController)
}
