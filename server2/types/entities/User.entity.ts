//region imports
import {IUser}     from "../../../shared/types/Entities/IUser";
import * as bcrypt from "bcrypt";

//endregion


export class User implements IUser {


	constructor(
		public email,
		public name,
		public password,
		public avatar?) {


	}

	/*	static async create(email, name, password) {
	 const salt = await bcrypt.genSalt();

	 password = await bcrypt.hash(password, salt);

	 return new User(email, name, password);
	 }*/


}
