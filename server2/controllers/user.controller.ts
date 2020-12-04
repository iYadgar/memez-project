import {BaseController}  from "./base.controller";
import {IUserController} from "../types/i-user.controller";
import {IMainController} from "../types/i-main.controller";

export class UserController extends BaseController implements IUserController {
	main: IMainController

	constructor() {
		super();

	}


}
