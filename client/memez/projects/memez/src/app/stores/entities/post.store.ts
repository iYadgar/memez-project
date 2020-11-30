import {Injectable}              from '@angular/core';
import {action, observable}      from 'mobx-angular';
import {RootStore}               from '../root.store';
import {IPost}                   from '../../../../../../../../shared/types/Entities/IPost';
import * as dayjs                from 'dayjs';
import {autorun, reaction, toJS} from 'mobx';
import {MOCK_POSTS}              from '../../../../../../../../shared/mock/MOCK_POSTS';
import {ILike}                   from '../../../../../../../../shared/types/Entities/ILike';

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

  @action
  async createPost(content: string) {
    let postInput = {
      user_id: this.root.log.currentUser.id,
      content: content,
    }

    const newPost = await this.root.postAdapter.createPost(postInput)
    //push post to posts array
    this.posts.unshift(newPost)
    //push post to current user posts array
    this.root.log.currentUser.posts.push(newPost)


  }

  @action
  async deletePost(post: IPost) {
    const currentUserPost = this.root.log
                                .currentUser.posts
                                .some(up => up.id === post.id)
    if (currentUserPost) {
      await this.root.postAdapter.deletePost(post.id);
      const
        postIndex       = this.posts.indexOf(post),
        postIndexInUser = this.root.log.currentUser.posts.indexOf(post)

      //remove post for posts array
      this.posts.splice(postIndex, 1);

      //remove post from current user array
      this.root.log.currentUser.posts.splice(postIndexInUser, 1)
    } else {
      alert('This is not your post to DELETE ! ! ! ')
    }
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
