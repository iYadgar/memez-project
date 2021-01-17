//region imports
import {IUser} from "./Entities/IUser";
//endregion
 

export interface IAuthResponse {
	user: IUser
	isAuth: boolean
}
