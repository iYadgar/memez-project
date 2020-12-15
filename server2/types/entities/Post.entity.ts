import {IPost} from "../../../shared/types/Entities/IPost";
import {IUser} from "../../../shared/types/Entities/IUser";

export class Post implements IPost {

	created: number;
	likes_amount: number = 0;

	constructor(
		public content:string,
		public postedBy:IUser
	) {
		this.created = Date.now()
	}
}
