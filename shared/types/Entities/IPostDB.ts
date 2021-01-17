import {IUser} from "./IUser";

export interface IPostDB {
	_id?: string
	content: string
	postedBy?: IUser
	created: number
	likes_amount?: number
	likedByCurrentUser?: boolean
	postMeme: string
	user_id: string

}
