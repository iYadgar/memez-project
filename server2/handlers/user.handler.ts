import {Request, Response} from "express"
import {IMainController}   from "../controllers/main.controller";
import {IUser}             from "../../shared/types/Entities/IUser";


export const getUsersHandler = async function (this: IMainController, req: Request, res: Response) {
	try {
		const users = await this.userController.getUsers()

		return res.json(users).end();


	} catch (e) {
		return res.status(404).send('error' + e)
	}
}

export const getUserHandler = async function (this: IMainController, req: Request, res: Response) {
 try {
 const user = await this.userController.getOneUser(req.params.id)

 return res.json(user).end()
 } catch (e) {
 return res.status(404).send({msg: 'user was not found' + e})
 }

 }

export const createUserHandler = async function (this: IMainController, req: Request, res: Response) {
	const user_name: IUser = {name: req.body.name}

	try {
		const newUser = await this.userController.saveUser(user_name)

		return res.json(newUser).end()
	} catch (e) {
		return res.status(404).json({msg: 'no user was added' + e})

	}

}
