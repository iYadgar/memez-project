import {MOCK_POSTS} from "../../shared/mock/MOCK_POSTS";

export const getPostService = (id: any) => {
    const found = MOCK_POSTS.find((ele: any) => ele.id === id)
    if (!found) {
        return false
    }
    return found
}

export const getPostsService = () => MOCK_POSTS


