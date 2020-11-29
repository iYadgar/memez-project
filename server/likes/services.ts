import {MOCK_LIKES} from "../../shared/mock/MOCK_LIKES";
import {ILike}      from "../../shared/types/Entities/ILike";
import exp          from "constants";

// Get all likes
export const getLikesService = (): ILike[] => MOCK_LIKES
// Get specific like
export const getLikeService = (id: string) => {
    const found = MOCK_LIKES.find(ele => ele.id === id)
    return found ? found : false
}
export const postLikeService = () => {

}
