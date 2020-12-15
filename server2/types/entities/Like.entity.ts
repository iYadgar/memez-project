import {ILike} from "../../../shared/types/Entities/ILike";
import {IUser} from "../../../shared/types/Entities/IUser";

export class Like implements ILike {
	created: number;
	user_id: IUser;
	post_id: string;


	constructor(user_id, post_id) {
		this.created = Date.now()
		this.user_id = user_id
		this.post_id = post_id
	}

}
