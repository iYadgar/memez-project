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
      let i = 0
      console.log(`like store : ${toJS(this.likes.map(like => i++))}`)
    })


  }

  /*@action
   async getLikes(): Promise<ILike[]> {
   /!* if (this.USE_MOCK) {
   return this.likes = MOCK_LIKES;
   }*!/
   return this.likes = await this.root.likeAdapter.getLikes();
   }*/

  @action
  async createLike(post: IPost) {
    let likeInput = {
      user_id: this.root.log.currentUser._id,
      post_id: post._id
    };
    const postAlreadyLiked = post
      .likes
      .some(like => like.userLiked._id === this.root.log.currentUser._id)
    if (!postAlreadyLiked) {
      return await this.root.likeAdapter.createLike(likeInput)
    }
    return;

  }

  @action
  async unlike(like_id: string) {
    await this.root.likeAdapter.unlike(like_id)
  }

  @action
  async handleLike(post: IPost) {
    const newLike: ILike = await this.createLike(post);

    if (!newLike) {
      const likeToDelete: ILike = post
        .likes
        .find(like => like.userLiked._id === this.root.log.currentUser._id)

      await this.unlike(likeToDelete._id)
    }
    await this.root.ps.getPosts()
  }


}

