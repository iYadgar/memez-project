import {Injectable}                   from '@angular/core';
import {action, computed, observable} from 'mobx-angular';
import {RootStore}                    from '../root.store';
import {IPost}                        from '../../../../../../../../shared/types/Entities/IPost';
import {PostAdapter}                  from "../../adapters/post.adapter";


@Injectable({
  providedIn: 'root'
})
export class PostStore {
  @observable posts: IPost[] = [];

  /*useMock: boolean = false;*/

  constructor(
    public root: RootStore,
    private postAdapter: PostAdapter
  ) {
    this.root.ps = this;  //self-registration at root store
    window['postStore'] = this;


  }


  @computed get userPosts() {
    return this.posts
      .filter(post => post.postedBy._id === this.root.log.currentUser._id)

  }


  @action
  async getPosts() {
    /* if (this.useMock) {
     return this.posts = MOCK_POSTS;
     } */

    this.posts = await this
      .postAdapter
      .getPosts();


    /*return this.posts;*/

  }

  @action
  async createPost(content: string) {
    const postInput = {
      user_id: this.root.log.currentUser._id,
      content,
    }

    await this.postAdapter.createPost(postInput)

    await this.getPosts()
  }

  @action
  async deletePost(post: IPost) {

    await this.postAdapter.deletePost(post._id);

    await this.getPosts()

  }

  @action
  async getOnePost(post: IPost) {
    return this.postAdapter.getOnePost(post._id)
  }


}
