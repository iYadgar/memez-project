//region imports
import {Express}                                                     from "express";
import {createUserController, getUserController, getUsersController} from "./controllers";
//endregion
 


export function userRoutes(app: Express) {
    //get all users
    app.get('/api/users', getUsersController)
    //get specific user
    app.get('/api/users/:id', getUserController)
    //create new user
    app.post('/api/users', createUserController)

}
