import {ILike} from './ILike';

export interface IPost {
  id: string
  user_id: string
  content: string
  date: string
  time: string
  likes: ILike[]
}
