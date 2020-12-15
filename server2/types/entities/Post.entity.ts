import {IPost} from "../../../shared/types/Entities/IPost";
import {IUser} from "../../../shared/types/Entities/IUser";

export class Post implements IPost {
	content: string;
	created: number;
	likes_amount: number;
	postedBy: IUser;

	constructor(content, postedBy) {
		this.content = content
		this.created = Date.now()
		this.likes_amount = 0
		this.postedBy = postedBy
	}
}
