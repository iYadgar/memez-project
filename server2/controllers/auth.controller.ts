import * as jwt                          from 'jsonwebtoken'
import {BaseController, IBaseController} from "./base.controller";
import {Request, Response, NextFunction} from "express";
import {IUser}                           from "../../shared/types/Entities/IUser";


export interface IAuthController extends IBaseController {
	maxAge: number

	createToken(payload: string)

	getCurrentUser(req: Request, res: Response)

	checkUser(req: Request, res: Response)


}


export class AuthController extends BaseController implements IAuthController {
	maxAge: number = 3 * 24 * 60 * 60

	createToken(payload: string) {
		return jwt.sign({payload}, `idan's secret string`, {
			expiresIn: this.maxAge
		})
	}

	getCurrentUser(req: Request, res: Response) {
		const token = req.cookies.jwt;

		// check jwt exist & valid
		if (token) {
			jwt.verify(token, `idan's secret string`, (err, decodedToken) => {
				if (err) {
					console.log(err.message)
					return null
				} else {

					console.log(decodedToken)
					return decodedToken

				}
			})
		} else {
			return null
		}

	}

	checkUser(req: Request, res: Response): boolean {
		try {
			const token = req.cookies.jwt

			if (token) {
				const verify = jwt.verify(token, `idan's secret string`)

				return !!verify
			}
			return false
		} catch (e) {
			console.log(e)
			return false
		}
	}


}


