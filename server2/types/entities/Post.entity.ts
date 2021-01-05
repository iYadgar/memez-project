//region imports
import {IPost} from "../../../shared/types/Entities/IPost";
import {IUser} from "../../../shared/types/Entities/IUser";

//endregion


export class Post implements IPost {

	created: number = Date.now();
	likes_amount: number = 0;
	likedByCurrentUser: boolean = false

	constructor(
		public content: string,
		public postedBy: IUser,
		public postMeme: string
	) {

	}
}
