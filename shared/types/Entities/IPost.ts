import {ILike} from "./ILike";
import {IUser} from "./IUser";

export interface IPost {
	_id?: string
	content: string
	postedBy: IUser
	created : number
	likes_amount: number

}
