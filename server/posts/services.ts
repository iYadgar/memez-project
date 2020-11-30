import {MOCK_POSTS}   from "../../shared/mock/MOCK_POSTS";
import {v4 as uuidv4} from 'uuid'
import {IPost}        from "../../shared/types/Entities/IPost";
import dayjs          from 'dayjs';
import {MOCK_USERS}   from "../../shared/mock/MOCK_USERS";
import {IUser}        from "../../shared/types/Entities/IUser";
import {ILike}        from "../../shared/types/Entities/ILike";
import {MOCK_LIKES}   from "../../shared/mock/MOCK_LIKES";

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

// Create new post
export const createPostService = (content: string, user_id: string) => {
    const userPosted: IUser | undefined = MOCK_USERS.find(user => user.id === user_id)
    const newPost: IPost = {
        id     : uuidv4(),
        user_id: user_id,
        user_name : userPosted?.name,
        content: content,
        date   : dayjs().format('DD.MM.YY'),
        time   : dayjs().format('HH:mm'),
        likes  : []
    }
    if (userPosted !== undefined) {
        MOCK_POSTS.unshift(newPost)
        userPosted.posts.push(newPost)
    }
    return content ? newPost : false
}


// Delete post
export const deletePostService = (post_id: string) => {
    const
        postToDelete: IPost | undefined = MOCK_POSTS.find(post => post.id === post_id),
        userPosted: IUser | undefined   = MOCK_USERS.find(user => user.posts.find(up => up.id === post_id))

    if (postToDelete && userPosted) {
        const
            postIndex       = MOCK_POSTS.indexOf(postToDelete),
            userPostedIndex = MOCK_USERS.indexOf(userPosted);

        MOCK_POSTS.splice(postIndex, 1);
        MOCK_USERS.splice(userPostedIndex, 1);
    }
    return postToDelete ? postToDelete : false
}
