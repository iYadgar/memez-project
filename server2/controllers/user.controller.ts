//region imports
import {BaseController, IBaseController}  from "./base.controller";
import {IUser}                            from "../../shared/types/Entities/IUser";
import {FindAndModifyWriteOpResultObject} from "mongodb";

//endregion


export interface IUserController extends IBaseController {
	saveUser(user: IUser): Promise<any>

	getUsers(): Promise<IUser[]>

	getOneUser(user_id: string): Promise<IUser>

	saveUser(user: IUser): Promise<any>

	checkForUserEmail(email: string): Promise<IUser>

	updateUserPhoto(user_id: string, avatar: string): Promise<FindAndModifyWriteOpResultObject<IUser>>


}

export class UserController extends BaseController implements IUserController {

	constructor() {
		super();
	}

	async getUsers(): Promise<IUser[]> {
		return this.main.dbController.getUsers()
	}

	async getOneUser(user_id: string): Promise<IUser> {
		return this.main.dbController.getOneUser(user_id)

	}

	async saveUser(user: IUser): Promise<any> {
		return this.main.dbController.saveUser(user)
	}

	async checkForUserEmail(email: string): Promise<IUser> {
		return this.main.dbController.checkForUserEmail(email)
	}

	async updateUserPhoto(user_id: string, avatar: string): Promise<FindAndModifyWriteOpResultObject<IUser>> {
		return this.main.dbController.updateUserPhoto(user_id, avatar)
	}
}
