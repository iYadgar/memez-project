import {MOCK_LIKES}   from "../../shared/mock/MOCK_LIKES";
import {ILike}        from "../../shared/types/Entities/ILike";
import {IUser}        from "../../shared/types/Entities/IUser";
import {MOCK_USERS}   from "../../shared/mock/MOCK_USERS";
import {IPost}        from "../../shared/types/Entities/IPost";
import {MOCK_POSTS}   from "../../shared/mock/MOCK_POSTS";
import {v4 as uuidv4} from 'uuid'
import dayjs          from 'dayjs';


// Get all likes
export const getLikesService = (): ILike[] => MOCK_LIKES
// Get specific like
export const getLikeService = (id: string) => {
    const found = MOCK_LIKES.find(ele => ele.id === id)
    return found ? found : false
}

// create new like
export const createLikeService = (user_id: string, post_id: string) => {
    const userLiked: IUser | undefined = MOCK_USERS.find(user => user.id === user_id)
    const postLiked: IPost | undefined = MOCK_POSTS.find(post => post.id === post_id)

    const newLike: ILike = {
        id       : uuidv4(),
        timestamp: dayjs().format('DD.MM.YY'),
        user_id  : user_id,
        post_id  : post_id
    }
    if (userLiked !== undefined && postLiked !== undefined) {
        MOCK_LIKES.push(newLike)
        userLiked.likes.push(newLike)
        postLiked.likes.push(newLike)
    }

    return user_id && post_id ? newLike : false
}

//delete like
export const unlikeService = (like_id: string) => {
    const
        likeToDelete: ILike | undefined = MOCK_LIKES.find(like => like.id === like_id),
        postUnliked: IPost | undefined  = MOCK_POSTS
            .find(post => post.likes
                              .some(like => like.id === like_id));

    if (likeToDelete && postUnliked) {
        const
            likeIndex       = MOCK_LIKES.indexOf(likeToDelete),
            likeIndexInPost = MOCK_POSTS.indexOf(postUnliked)
        MOCK_LIKES.splice(likeIndex, 1)
        MOCK_POSTS.splice(likeIndexInPost, 1)
    }
    return likeToDelete ? likeToDelete : false
}
