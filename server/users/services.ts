import userModel from '../models/user-model'
import exp       from "constants";


// Get all users
export const getUsersService = async () => {
	const users = await userModel.find()
		.populate('posts')
		.populate('likes')
		.exec()
	return users
}
// Get Specific user
export const getUserService = async (id: string) => {
	const user = await userModel.findById(id)
		.populate('posts')
		.populate('likes')
		.exec()
	return user
}
// Create new User
export const createUserService = async (name: string) => {
	const newUser = await userModel.create({name: name})
	return name ? newUser : false


}

