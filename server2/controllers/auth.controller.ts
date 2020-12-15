import * as jwt                          from 'jsonwebtoken'
import {BaseController, IBaseController} from "./base.controller";
import {Request, Response, NextFunction} from "express";


export interface IAuthController extends IBaseController {
	maxAge: number

	createToken(_id: string)

	requireAuth(req: Request, res: Response, next: NextFunction)

	checkUser(req: Request, res: Response, next: NextFunction)

}

export class AuthController extends BaseController implements IAuthController {
	maxAge: number = 3 * 24 * 60 * 60

	createToken(_id: string) {
		return jwt.sign({_id}, `idan's secret string`, {
			expiresIn: this.maxAge
		})
	}

	requireAuth(req: Request, res: Response, next: NextFunction) {
		const token = req.cookies.jwt;

		// check jwt exist & valid
		if (token) {
			jwt.verify(token, `idan's secret string`, (err, decodedToken) => {
				if (err) {
					console.log(err.message)
					res.redirect('/login')
				} else {
					console.log(decodedToken)
					next()
				}
			})
		} else {
			res.redirect('/login')
		}

	}

	async checkUser(req: Request, res: Response, next: NextFunction) {
		const token = req.cookies.jwt;

		// check jwt exist & valid
		if (token) {
			jwt.verify(token, `idan's secret string`, async (err, decodedToken) => {
				if (err) {
					console.log(err.message)
					res.locals.user = null;
					next()
				} else {
					const user = await this.main.userController.getOneUser(decodedToken.id)
					res.locals.user = user
					next()
				}
			})
		} else {
			res.locals.user = null;
			next();
		}

	}
}
