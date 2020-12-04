import {Express}                                                                       from "express";
import {createLikeController, getLikeController, getLikesController, unlikeController} from "./controllers";


export function likeRoutes(app: Express) {
	//get all likes
	app.get('/api/likes', getLikesController)
	//get specific like
	app.get('/api/likes/:id', getLikeController)
	//create new like
	app.post('/api/likes', createLikeController)
	//unlike
	app.delete('/api/likes/:id', unlikeController)
}

