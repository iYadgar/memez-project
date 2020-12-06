import {IUserM}                          from "../models/user.model";
import {BaseController, IBaseController} from "./base.controller";


export interface IUserController extends IBaseController {
	getUsers(): Promise<IUserM[]>;

	getUser(id: IUserM['_id']): Promise<IUserM>;

	createUser(name: IUserM['name']): Promise<IUserM>;
}

export class UserController extends BaseController implements IUserController {

	constructor() {
		super();
	}


	async getUsers(): Promise<IUserM[]> {
		return await this.main.dbController.getUsers()
	}

	async getUser(id: IUserM['_id']): Promise<IUserM> {
		return await this.main.dbController.getUser(id)
	}
u
	async createUser(name: IUserM['name']): Promise<IUserM> {
		return await this.main.dbController.createUser(name)
	}
}
