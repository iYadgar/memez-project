//region imports
import * as jwt                          from 'jsonwebtoken'
import {NextFunction, Request, Response} from "express";
import {IMainController}                 from "../controllers/main.controller";

//endregion


export function isAuthenticatedHandler(this: IMainController, req: Request, res: Response) {
	const token = this.authController.checkUser(req)


	try {
		if (token) {
			res.send(true).status(200)
			return;
		}
		res.send(false).status(200)
		return;


	} catch (e) {
		return res.json({msg: 'Something went wrong ' + e})
			.status(500)
			.end()

	}


}

export function getCurrentUserHandler(this: IMainController, req: Request, res: Response, next: NextFunction) {
	const token = req.cookies.jwt;
	// check jwt exist & valid
	try {
		if (token) {
			jwt.verify(token, `idan's secret string`, async (err, decodedToken) => {
				if (err) {
					console.log(err.message)
					res.status(200)
						.send(err.message)
				} else {
					const user = await this.userController.getOneUser(decodedToken.payload)
					res.send(user)
						.status(200)

				}
			})
		}
	} catch (e) {
		res.status(500).send({msg: 'Something went wrong'})
	}

}
