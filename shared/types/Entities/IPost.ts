//region imports
import {IUser} from "./IUser";

//endregion


export interface IPost {
	_id?: string
	content: string
	postedBy: IUser
	created: number
	likes_amount: number
	likedByCurrentUser?: boolean
	postMeme: string

}
