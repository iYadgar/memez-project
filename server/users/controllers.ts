import {Request, Response}                                  from "express"
import {IUser}                                              from "../../shared/types/Entities/IUser";
import {createUserService, getUserService, getUsersService} from "./services";

export const getUsersController = (req: Request, res: Response) => {
    const users: IUser[] = getUsersService()
    res.json(users).end();
}

export const getUserController = (req: Request, res: Response) => {
    const user: IUser | boolean = getUserService(req.params.id)

    return user ? res.json(user).end() : res.status(404).send({msg: 'user was not found'})
}

export const createUserController = (req: Request, res: Response) => {
    const user_name: string = req.body.name
    const newUser: IUser | boolean = createUserService(user_name)

    return newUser ? res.json(newUser).end() : res.status(404).json({msg: 'no user was added'})
}
