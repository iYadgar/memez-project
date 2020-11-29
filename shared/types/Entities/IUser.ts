import {IPost} from './IPost';
import {ILike} from './ILike';

export interface IUser {
  id: string
  name: string
  posts: IPost[]
  likes: ILike[]
}
