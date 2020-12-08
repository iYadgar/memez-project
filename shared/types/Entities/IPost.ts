import {ILike} from './ILike';
import {IUser} from "./IUser";

export interface IPost extends Document {
	_id?: string
	content: string
	postedBy: IUser
	date: string
	time: string
	likes?: ILike[]

}
