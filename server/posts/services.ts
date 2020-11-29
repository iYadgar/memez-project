import {MOCK_POSTS} from "../../shared/mock/MOCK_POSTS";
import {IPost} from "../../shared/types/Entities/IPost";

// Get all posts
export const getPostsService = () => MOCK_POSTS
// Get Specific post
export const getPostService = (id: any) => {
    const found = MOCK_POSTS.find((ele: IPost) => ele.id === id)
    if (found) {
        return found
    }
    return false
}

