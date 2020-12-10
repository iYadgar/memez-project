import {IUser} from "./IUser";


export interface ILike {
	_id?: string
	timestamp: string
	userLiked: IUser
	postLiked: string
}
