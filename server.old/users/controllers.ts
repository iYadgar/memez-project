//region imports
import {Request, Response} from "express"

import {createUserService, getUserService, getUsersService} from "./services";
//endregion
 

export const getUsersController = async (req: Request, res: Response) => {
	try {
		const users = await getUsersService()
		return res.json(users).end();

	} catch (e) {
		return res.status(404).send('error' + e)
	}
}

export const getUserController = async (req: Request, res: Response) => {
	try {
		const user = await getUserService(req.params.id)

		return res.json(user).end()
	} catch (e) {
		return res.status(404).send({msg: 'user was not found' + e})
	}

}

export const createUserController = async (req: Request, res: Response) => {
	const user_name: string = req.body.name

	try {
		const newUser = await createUserService(user_name)

		return res.json(newUser).end()
	} catch (e) {
		return res.status(404).json({msg: 'no user was added' + e})

	}

}
