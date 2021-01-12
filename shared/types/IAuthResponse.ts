import {IUser} from "./Entities/IUser";

export interface IAuthResponse {
	user: IUser
	isAuth: boolean
}
