import {BaseController, IBaseController} from "./base.controller";
import {IUser}                           from "../../shared/types/Entities/IUser";


export interface IUserController extends IBaseController {
	saveUser(user: IUser): Promise<any>

	getUsers(): Promise<IUser[]>

}

export class UserController extends BaseController implements IUserController {

	constructor() {
		super();
	}

	async getUsers(): Promise<IUser[]> {
		return this.main.dbController.getUsers()
	}

	async saveUser(user: IUser): Promise<any> {
		return this.main.dbController.saveUser(user)
	}


}
