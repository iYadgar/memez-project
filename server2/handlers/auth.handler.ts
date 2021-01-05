//region imports
import * as jwt            from 'jsonwebtoken'
import {Request, Response} from "express";
import {IMainController}   from "../controllers/main.controller";
//endregion
 


export function isAuthenticatedHandler(this: IMainController, req: Request, res: Response) {
	const token = this.authController.checkUser(req)



	try {
		if (token) {
			res.send(true)
			return res.status(200).json({msg: 'user authenticated'}).end()
		}
		res.send(false)
		return res.status(200).json({msg: 'authentication failed'}).end()


	} catch (e) {
		return res.json({msg: 'Something went wrong ' + e})
			.status(500)
			.end()

	}


}

export function getCurrentUserHandler(this: IMainController, req: Request, res: Response) {
	const token = req.cookies.jwt;

	// check jwt exist & valid
	try {
		if (token) {
			jwt.verify(token, `idan's secret string`, async (err, decodedToken) => {
				if (err) {

					return res.status(200)
						.send(err.message)
				}

				const user = await this.userController.getOneUser(decodedToken.payload)
				return res.send(user)
					.send({msg: 'send user successful'})
					.status(200)

			})
		}
	} catch (e) {
		return res.status(500).send({msg: 'Something went wrong'})
	}
}
