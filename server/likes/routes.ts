import {Express}                               from "express";
import {getLikeController, getLikesController} from "./controllers";


export function likeRoutes(app :Express){
    //get all likes
    app.get('/api/likes',getLikesController)
    //get specific like
    app.get('/api/likes/:id', getLikeController)
}

