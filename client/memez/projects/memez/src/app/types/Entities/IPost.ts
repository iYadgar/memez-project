import {ILike} from './ILike';

export interface IPost {
  id: number
  user_id: number
  content: string
  date: string
  time: string
  likes: ILike[]
}
