import {Injectable}         from '@angular/core';
import {action, observable} from 'mobx-angular';
import {RootStore}          from '../root.store';
import {IPost}              from '../../../../../../../../shared/types/Entities/IPost';
import * as dayjs           from 'dayjs';
import {autorun}            from 'mobx';
import {MOCK_POSTS}         from '../../../../../../../../shared/mock/MOCK_POSTS';
import {ILike}              from '../../../../../../../../shared/types/Entities/ILike';

@Injectable({
  providedIn: 'root'
})
export class PostStore {
  @observable posts: IPost[] = [];
  useMock: boolean = false;

  constructor(
    public root: RootStore
  ) {
    this.root.ps = this;  //self-registration at root store
    window['postStore'] = this;

  }

  @action
  async getPosts(): Promise<IPost[]> {
    if (this.useMock) {
      return this.posts = MOCK_POSTS;
    } else {
      this.posts = await this.root
                             .postAdapter
                             .getPosts();
    }
  }

  @action post(str: string) {
    let newPost: IPost = {
      id     : `${Math.floor((Math.random()) * 100)}`,
      user_id: `${Math.floor((Math.random()) * 100)}`,
      content: str,
      date   : dayjs().format('DD.MM.YY'),
      time   : dayjs().format('HH:mm'),
      likes  : []
    }
    this.posts.unshift(newPost);
    this.root.log.currentUser.posts.push(newPost)


  }

  @action deletePost(post: IPost) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  }

  @action postLiked(post: IPost, newLike: ILike) {
    // Find if the current user has already liked the post
    let found = post.likes.find(like => like.user_id === newLike.user_id);
    if (found) {
      // If found unlike
      let index = post.likes.indexOf(found);
      post.likes.splice(index, 1);
    } else {
      // if not found like
      post.likes.push(newLike);
    }
  }
}
