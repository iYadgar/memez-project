//region imports
import {IUser}   from "../../../shared/types/Entities/IUser";
import {IPostDB} from "../../../shared/types/Entities/IPostDB";

//endregion


export class Post implements IPostDB {

	created: number = Date.now();


	constructor(
		public content: string,
		public user_id: string,
		public postMeme: string
	) {

	}
}
