//region imports
import {IUser} from "./IUser";
//endregion
 


export interface ILike {
	_id?: string
	created: number
	user_id: IUser
	post_id: string
}
