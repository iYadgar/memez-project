//region imports
import {IUser} from "./IUser";
//endregion
 

export interface IUserResponse {
	user?: IUser,
	isCreated: boolean,
	msg: string
}
