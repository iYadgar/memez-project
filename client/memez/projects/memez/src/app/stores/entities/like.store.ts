import {autorun, toJS}      from 'mobx';
import {Injectable}         from '@angular/core';
import {action, observable} from 'mobx-angular';
import {ILike}              from '../../../../../../../../shared/types/Entities/ILike';
import {RootStore}          from '../root.store';
import {IPost}              from '../../../../../../../../shared/types/Entities/IPost';


@Injectable({providedIn: 'root'})

export class LikeStore {
  @observable likes: ILike[] = [];

  /*USE_MOCK: boolean = false;*/

  constructor(
    public root: RootStore) {
    window['likeStore'] = this;
    this.root.likeStore = this;
    autorun(() => {

    })


  }


  @action
  async createLike(post: IPost) {
    const likeInput = {
      user_id: this.root.log.currentUser._id,
      post_id: post._id
    }
    return await this.root.likeAdapter.createLike(likeInput)


  }

  @action
  async unlike(like_id: string) {
    await this.root.likeAdapter.unlike(like_id)
  }

  @action
  async handleLike(post: IPost) {
    const
      userLikes: ILike[] = await this.getUserLikes(),
      found: ILike       = userLikes.find(like => like.postLiked === post._id);

    if (!!found) {
      await this.unlike(found._id)
    } else {
      await this.createLike(post)
    }


    await this.root.ps.getPosts()
  }

  @action
  async getPostLikes(post_id: string) {
    return this.root.likeAdapter.getPostLikes(post_id);
  }

  @action
  async getUserLikes(): Promise<ILike[]> {
    const user_id: string = this.root.log.currentUser._id
    return this.root.likeAdapter.getUserLikes(user_id);
  }


}

