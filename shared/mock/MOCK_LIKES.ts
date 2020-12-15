import {ILike} from '../types/Entities/ILike';


export const MOCK_LIKES: ILike[] = [
  {
    _id    : '1',
    created: '30.01.2020',
    user_id: '1',
    post_id: '8'
  },
  {
    _id     : '2',
    created : '22.02.2020',
    user_id : '1',
    post__id: '6'
  },
  {
    _id     : '3',
    created : '29.03.2020',
    user_id : '2',
    post__id: '6'
  },
  {
    _id     : '4',
    created : '02.06.2020',
    user_id : '3',
    post__id: '1'
  },
  {
    _id     : '5',
    created : '12.03.2020',
    user_id : '4',
    post__id: '3'
  },
  {
    _id     : '6',
    created : '24.10.2020',
    user_id : '2',
    post__id: '3'
  },
  {
    _id     : '7',
    created : '21.07.2020',
    user_id : '9',
    post__id: '3'
  },
  {
    _id     : '8',
    created : '18.08.2020',
    user_id : '10',
    post__id: '3'
  },
  {
    _id     : '9',
    created : '07.06.2020',
    user_id : '3',
    post__id: '3'
  },
  {
    _id     : '10',
    created : '06.12.2019',
    user_id : '3',
    post__id: '4'
  }
];

