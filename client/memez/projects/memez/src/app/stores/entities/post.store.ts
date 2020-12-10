import {Injectable}                   from '@angular/core';
import {action, computed, observable} from 'mobx-angular';
import {RootStore}                    from '../root.store';
import {IPost}                        from '../../../../../../../../shared/types/Entities/IPost';
import {autorun}                      from 'mobx';


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

    this.posts = await this.root
      .postAdapter
      .getPosts();

   /* this.posts
      .map(async post => {
        await this.root
          .likeStore
          .getPostLikes(post)
      })*/

    return this.posts;

  }

  @action
  async createPost(content: string) {
    let postInput = {
      user_id: this.root.log.currentUser._id,
      content: content,
    }

    await this.root.postAdapter.createPost(postInput)

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

 /* @action
  async getOnePost(post : IPost){
    return await this.root.postAdapter.getOnePost()
  }*/


}
