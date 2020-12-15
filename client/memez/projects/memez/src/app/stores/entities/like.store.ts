import {Injectable}         from '@angular/core';
import {action, observable} from 'mobx-angular';
import {ILike}              from '../../../../../../../../shared/types/Entities/ILike';
import {RootStore}          from '../root.store';
import {IPost}              from '../../../../../../../../shared/types/Entities/IPost';
import {IlikeResponse}      from "../../../../../../../../shared/types/Entities/IlikeResponse";
import {LikeAdapter}        from "../../adapters/like.adapter";


@Injectable({providedIn: 'root'})

export class LikeStore {
  @observable likes: ILike[] = [];

  /*USE_MOCK: boolean = false;*/

  constructor(
    public root: RootStore,
    private likeAdapter : LikeAdapter) {
    window['likeStore'] = this;
    this.root.likeStore = this;
  }


  @action
  async createLike(post: IPost): Promise<IlikeResponse> {
    const
      likeInput = {
        user_id: this.root.log.currentUser._id,
        post_id: post._id
      };
    return this.likeAdapter.createLike(likeInput);


  }

  @action
  async unlike(like_id: string): Promise<IlikeResponse> {
    return this.likeAdapter.unlike(like_id)


  }

  @action
  async handleLike(post: IPost) {
    const
      userLikes: ILike[] = await this.getUserLikes(),
      found: ILike       = userLikes.find(like => like.post_id === post._id);

    if (!!found) {
      const unlikeRes: IlikeResponse = await this.unlike(found._id)
      post.likes_amount = unlikeRes.postLikeCount

    } else {
      const likeRes = await this.createLike(post)
      post.likes_amount = likeRes.postLikeCount

    }


  }

  @action
  async getPostLikes(post_id: string) {
    return this.likeAdapter.getPostLikes(post_id);
  }

  @action
  async getUserLikes(): Promise<ILike[]> {
    const user_id: string = this.root.log.currentUser._id
    return this.likeAdapter.getUserLikes(user_id);
  }


}

