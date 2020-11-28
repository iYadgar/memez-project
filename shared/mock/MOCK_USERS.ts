import {IUser}      from '../../client/memez/projects/memez/src/app/types/Entities/IUser';
import {MOCK_POSTS} from './MOCK_POSTS';
import {MOCK_LIKES} from './MOCK_LIKES';

export const MOCK_USERS: IUser[] = [
  {
    id   : 1,
    name : 'Hazel Biesinger',
    posts: [MOCK_POSTS[0], MOCK_POSTS[1], MOCK_POSTS[2]],
    likes: [MOCK_LIKES[0], MOCK_LIKES[1]]
  },
  {
    id   : 2,
    name : 'Elisa Vannozzii',
    posts: [],
    likes: [MOCK_LIKES[2]]
  },
  {
    id   : 3,
    name : 'Laina Livzey',
    posts: [],
    likes: [MOCK_LIKES[3],MOCK_LIKES[9],MOCK_LIKES[8]]
  },
  {
    id   : 4,
    name : 'Bayard Dibley',
    posts: [MOCK_POSTS[3], MOCK_POSTS[4]],
    likes: [MOCK_LIKES[4], MOCK_LIKES[5], MOCK_LIKES[6]]
  },
  {
    id   : 5,
    name : 'Allx Kellie',
    posts: [],
    likes: []
  },
  {
    id   : 6,
    name : 'Farris Passo',
    posts: [MOCK_POSTS[5]],
    likes: []
  },
  {
    id   : 7,
    name : 'Kristien Cicco',
    posts: [MOCK_POSTS[6], MOCK_POSTS[7], MOCK_POSTS[8]],
    likes: []
  },
  {
    id   : 8,
    name : 'Kevon Joffe',
    posts: [],
    likes: []
  },
  {
    id   : 9,
    name : 'Devin Roskrug',
    posts: [],
    likes: [MOCK_LIKES[6]]
  },
  {
    id   : 10,
    name : 'Issi Neat',
    posts: [MOCK_POSTS[9]],
    likes: [MOCK_LIKES[7]]
  }
];
