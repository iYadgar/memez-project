//region imports
import {ILike} from "../../../shared/types/Entities/ILike";
//endregion
 

export class Like implements ILike {
	created: number = Date.now()


	constructor(public user_id, public post_id) {


	}

}
