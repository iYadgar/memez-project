import {IPost} from './IPost';
import {ILike} from './ILike';

export interface IUser {
  id: number
  name: string
  posts: IPost[]
  likes: ILike[]
}
