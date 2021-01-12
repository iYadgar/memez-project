//region imports
import * as bcrypt       from "bcrypt";
import {IHttpController} from "../../controllers/http.controller";
import {IUser}           from "../../../shared/types/Entities/IUser";
import {User}            from "../../types/entities/User.entity";
import {IUserResponse}   from "../../../shared/types/Entities/IUserResponse";


//endregion


export async function getUsersHandler (this: IHttpController, socket, data, req_id) {
	try {
		const users = await this.main.userController.getUsers()
		socket.emit('getUsers', users, req_id)
	} catch (e) {
		socket.emit('getUsers', {msg: `Something went wrong ${e} `}, req_id)
	}
}

export async function getUserHandler(this: IHttpController, socket, data, req_id) {
	const parsedData = JSON.parse(data)
	try {
		const user = await this.main.userController.getOneUser(parsedData.id)
		socket.emit('getUser', user, req_id)

	} catch (e) {
		socket.emit('getUser', {msg: 'user was not found' + e}, req_id)
	}

}

export async function createUserHandler(this: IHttpController, socket, data, req_id) {

	const
		parsedData          = JSON.parse(data),
		salt                = await bcrypt.genSalt(),
		password            = await bcrypt.hash(parsedData.password, salt),
		userToCreate: IUser = new User(parsedData.email, parsedData.name, password, parsedData.avatar)
	try {
		const
			newUser = await this.main.userController.saveUser(userToCreate);

		if (!newUser) {
			const res: IUserResponse = {
				isCreated: false,
				msg      : `user does not exist `
			}
			socket.emit('createUser', res, req_id)
			return;
		}
		const res: IUserResponse = {
			user     : newUser,
			isCreated: true,
			msg      : 'User was created'
		}
		socket.emit('createUser', res, req_id)

	} catch (e) {
		if (e.code === 11000) {
			const res: IUserResponse = {
				isCreated: false,
				msg      : 'Email is already taken'
			}
			socket.emit('createUser', res, req_id)
			return;
		}

		const res: IUserResponse = {
			isCreated: false,
			msg      : 'Something went wrong' + e
		}
		socket.emit('createUser', res, req_id)

	}

}


export async function updateUserPhotoHandler(this: IHttpController, socket, data, req_id) {
	const parsedData = JSON.parse(data)
	try {
		const response = await this.main.userController.updateUserPhoto(parsedData.id, parsedData.avatar)
		socket.emit('updateUserPhoto', {msg: 'user photo was updated ' + response}, req_id)
	} catch (e) {
		socket.emit('updateUserPhoto', {msg: 'something went wrong...' + e}, req_id)

	}
}
