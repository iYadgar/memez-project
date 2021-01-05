//region imports
import {IPost} from "../../../shared/types/Entities/IPost";
import {IUser} from "../../../shared/types/Entities/IUser";

//endregion


export class Post implements IPost {

	created: number = Date.now();


	constructor(
		public content: string,
		public postedBy: IUser,
		public postMeme: string
	) {

	}
}
