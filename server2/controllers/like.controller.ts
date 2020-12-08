import {BaseController, IBaseController} from "./base.controller";
import {ILike}                           from "../../shared/types/Entities/ILike";


export interface ILikeController extends IBaseController {
	getLikes(): Promise<ILike[]>

	saveLike(like: ILike): Promise<any>


}

export class LikeController extends BaseController implements ILikeController {
	constructor() {
		super();


	}

	async getLikes(): Promise<ILike[]> {
		return this.main.dbController.getLikes()

	}

	saveLike(like: ILike): Promise<any> {
		return this.main.dbController.saveLike(like)
	}


}
