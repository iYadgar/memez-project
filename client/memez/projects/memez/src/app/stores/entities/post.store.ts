import {Injectable}                   from '@angular/core';
import {action, computed, observable} from 'mobx-angular';
import {RootStore}                    from '../root.store';
import {IPost}                        from '../../../../../../../../shared/types/Entities/IPost';
import * as dayjs                     from 'dayjs';
import {autorun, reaction, toJS}      from 'mobx';
/*import {MOCK_POSTS}              from '../../../../../../../../shared/mock/MOCK_POSTS';*/
import {ILike}                        from '../../../../../../../../shared/types/Entities/ILike';

@Injectable({
  providedIn: 'root'
})
export class PostStore {
  @observable posts: IPost[] = [];

  /*useMock: boolean = false;*/

  constructor(
    public root: RootStore
  ) {
    this.root.ps = this;  //self-registration at root store
    window['postStore'] = this;
    autorun(() => {

    })


  }

  @computed get reversedPosts() {
    return this.posts
      .slice()
      .reverse()
  }

  @computed get userPosts() {
    const userPosts: IPost[] = this.posts
      .filter(post => post.postedBy._id === this.root.log.currentUser._id)
    return userPosts.reverse()
  }

  @action
  async getPosts(): Promise<IPost[]> {
    /* if (this.useMock) {
     return this.posts = MOCK_POSTS;
     } */
    return this.posts = await this.root
      .postAdapter
      .getPosts();

  }

  @action
  async createPost(content: string) {
    let postInput = {
      user_id: this.root.log.currentUser._id,
      content: content,
    }

    const newPost = await this.root.postAdapter.createPost(postInput)
    //push post to posts array

    await this.getPosts()



  }

  @action
  async deletePost(post: IPost) {
    if (post.postedBy._id === this.root.log.currentUser._id) {
      await this.root.postAdapter.deletePost(post._id);

      await this.getPosts()
    } else {
      alert('This is not your post to DELETE ! ! ! ')
    }
  }


}
