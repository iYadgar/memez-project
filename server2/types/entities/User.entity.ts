import {IUser}     from "../../../shared/types/Entities/IUser";
import * as bcrypt from "bcrypt";

export class User implements IUser {
	name: string;
	email: string;
	password: string;

	constructor(email, name, password) {
		this.email = email
		this.name = name
		this.password = password

	}

	static async create(email, name, password) {
		const salt = await bcrypt.genSalt();

		password = await bcrypt.hash(password, salt);

		return new User(email, name, password);
	}


}
