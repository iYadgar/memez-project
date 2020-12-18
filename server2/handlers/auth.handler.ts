import * as jwt            from 'jsonwebtoken'
import {Request, Response} from "express";
import {IMainController}   from "../controllers/main.controller";


export function isAuthenticatedHandler(this: IMainController, req: Request, res: Response) {
	const token = this.authController.checkUser(req, res)
	{
		try {
			if (token) {
				res.json(true).end()
				return res.status(200).json({msg: 'user authenticated'}).end()
			}
			res.send(false)
			return res.status(200).json({msg: 'authentication failed'}).end()


		} catch (e) {
			return res.status(500).json({msg: 'Something went wrong ' + e}).end()
		}

	}
}

export function getCurrentUserHandler(this: IMainController, req: Request, res: Response) {
	const token = req.cookies.jwt;

	// check jwt exist & valid
	try {
		if (token) {
			jwt.verify(token, `idan's secret string`, async (err, decodedToken) => {
				if (err) {
					console.log(err.message)
					return res.status(200).send(err.message)
				}

				const user = await this.userController.getOneUser(decodedToken.payload)
				return res.send(user).status(200).send({msg: 'send user successful'})

			})
		}
	} catch (e) {
		return res.status(500).send({msg: 'Something went wrong'})
	}
}
