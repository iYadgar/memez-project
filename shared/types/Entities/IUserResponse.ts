import {IUser} from "./IUser";

export interface IUserResponse {
	user?: IUser,
	isCreated: boolean,
	msg: string
}
