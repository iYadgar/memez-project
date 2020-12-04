import {ILike} from '../types/Entities/ILike';


export const MOCK_LIKES: ILike[] = [
  {
    _id       : '1',
    timestamp: '30.01.2020',
    userLiked  : '1',
    post_id  : '8'
  },
  {
    _id       : '2',
    timestamp: '22.02.2020',
    userLiked  : '1',
    post__id  : '6'
  },
  {
    _id       : '3',
    timestamp: '29.03.2020',
    userLiked  : '2',
    post__id  : '6'
  },
  {
    _id       : '4',
    timestamp: '02.06.2020',
    userLiked  : '3',
    post__id  : '1'
  },
  {
    _id       : '5',
    timestamp: '12.03.2020',
    userLiked  : '4',
    post__id  : '3'
  },
  {
    _id       : '6',
    timestamp: '24.10.2020',
    userLiked  : '2',
    post__id  : '3'
  },
  {
    _id       : '7',
    timestamp: '21.07.2020',
    userLiked  : '9',
    post__id  : '3'
  },
  {
    _id       : '8',
    timestamp: '18.08.2020',
    userLiked  : '10',
    post__id  : '3'
  },
  {
    _id       : '9',
    timestamp: '07.06.2020',
    userLiked  : '3',
    post__id  : '3'
  },
  {
    _id       : '10',
    timestamp: '06.12.2019',
    userLiked  : '3',
    post__id  : '4'
  }
];

