import {Request, Response} from "express"
import {IMainController}   from "../controllers/main.controller"
import * as bcrypt         from 'bcrypt'
import {IUser}             from "../../shared/types/Entities/IUser";

export async function loginHandler(this: IMainController, req: Request, res: Response) {
	try {
		const
			found: IUser = await this.userController.checkForUserEmail(req.body.email),
			password     = req.body.password
		if (found) {
			const auth = await bcrypt.compare(password, found.password)
			if (auth) {
				const token = this.authController.createToken(found._id)
				res
					.cookie('jwt', token, {httpOnly: true, maxAge: this.authController.maxAge * 1000})
				return res.status(200).send(found)
			}
			return res.status(404).send({msg: 'Password is incorrect'})
		}
		return res.status(404).send({msg: 'User does not exist'})
	} catch (e) {
		res.status(400).send({msg: 'Something went wrong'})
	}
}

export async function logoutHandler(this: IMainController, req: Request, res: Response) {

	res.status(200).cookie('jwt', '', {maxAge: 1}).send({msg: 'cookie has replaced'})

}
