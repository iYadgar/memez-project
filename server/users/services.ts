import {MOCK_USERS}   from "../../shared/mock/MOCK_USERS";
import {IUser}        from "../../shared/types/Entities/IUser";
import {v4 as uuidv4} from 'uuid'


// Get all users
export const getUsersService = () => MOCK_USERS
// Get Specific user
export const getUserService = (id: string) => {
    const found = MOCK_USERS.find((ele: IUser) => ele.id === id)
    if (found) {
        return found
    }
    return false
}

export const createUserService = (name: string) => {
    const newUser: IUser = {
        id   : uuidv4(),
        name : name,
        posts: [],
        likes: []
    }
    if (name) {
        MOCK_USERS.push(newUser)
    }
    return name ? newUser : false


}
