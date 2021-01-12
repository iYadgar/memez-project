// //region imports
// import {Request, Response} from "express"
// import {IMainController}   from "../controllers/main.controller";
// import {IUser}             from "../../shared/types/Entities/IUser";
// import {User}              from "../types/entities/User.entity";
// import * as bcrypt         from "bcrypt";
// //endregion
//
//
// export const getUsersHandler = async function (this: IMainController, req: Request, res: Response) {
// 	try {
// 		const users = await this.userController.getUsers()
//
// 		return res.json(users).end();
//
//
// 	} catch (e) {
// 		return res.status(404).send('error' + e)
// 	}
// }
//
// export const getUserHandler = async function (this: IMainController, req: Request, res: Response) {
// 	try {
// 		const user = await this.userController.getOneUser(req.params.id)
//
// 		return res.json(user).end()
// 	} catch (e) {
// 		return res.status(404).send({msg: 'user was not found' + e})
// 	}
//
// }
//
// export async function createUserHandler(this: IMainController, req: Request, res: Response) {
// 	const salt                = await bcrypt.genSalt(),
// 		  password            = await bcrypt.hash(req.body.password, salt),
// 		  userToCreate: IUser = new User(req.body.email, req.body.name, password, req.body.avatar)
// 	try {
// 		const
// 			newUser = await this.userController.saveUser(userToCreate);
//
// 		if (!newUser) {
// 			return res.status(404).send({msg: `user does not exist `})
// 		}
//
//
// 		return res.status(201)
// 			.json(newUser).end()
//
// 	} catch (e) {
// 		if (e.code === 11000) {
// 			return res.status(409).json({msg: 'Email is already taken'})
// 		}
// 		return res.status(500).json({msg: 'Something went wrong' + e})
//
// 	}
//
// }
//
//
//
// export async function updateUserPhotoHandler(this: IMainController, req: Request, res: Response) {
// 	try {
// 		const response = await this.userController.updateUserPhoto(req.params.id, req.body.avatar)
// 		res.status(201).send({msg: 'user photo was updated ' + response})
// 	} catch (e) {
// 		res.status(500).send({msg: 'something went wrong...' + e})
//
// 	}
// }
