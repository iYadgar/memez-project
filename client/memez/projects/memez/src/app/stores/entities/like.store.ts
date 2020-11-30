import {Injectable}              from '@angular/core';
import {action, observable}      from 'mobx-angular';
import {ILike}                   from '../../../../../../../../shared/types/Entities/ILike';
import {RootStore}               from '../root.store';
import {MOCK_LIKES}              from '../../../../../../../../shared/mock/MOCK_LIKES';
import {IPost}                   from '../../../../../../../../shared/types/Entities/IPost';
import * as dayjs                from 'dayjs';
import {autorun, reaction, toJS} from 'mobx';
import {MatDialog}               from '@angular/material/dialog';
import {LikeDialogBoxComponent}  from '../../components/like-dialog-box/like-dialog-box.component';


@Injectable({providedIn: 'root'})

export class LikeStore {
  @observable likes: ILike[] = [];
  USE_MOCK: boolean = false;

  constructor(
    public root: RootStore) {
    window['likeStore'] = this;
    this.root.likeStore = this;
    autorun(() => {

      console.log(toJS(this.likes))
    })


  }

  @action
  async getLikes(): Promise<ILike[]> {
    if (this.USE_MOCK) {
      return this.likes = MOCK_LIKES;
    }
    return this.likes = await this.root.likeAdapter.getLikes();
  }

  @action
  async createLike(post: IPost) {
    let likeInput = {
      user_id: this.root.log.currentUser.id,
      post_id: post.id
    };

    return await this.root.likeAdapter.createLike(likeInput)

  }

  @action
  async unlike(like_id: string) {
    await this.root.likeAdapter.unlike(like_id)
  }

  @action
  async handleLike(post: IPost) {
    const userLiked = post.likes
                          .find(like => like.user_id === this.root.log.currentUser.id);


    if (!userLiked || userLiked === undefined) {
      const newLike = await this.createLike(post)
      this.root.log.currentUser.likes.push(newLike)
      post.likes.push(newLike)
      this.likes.push(newLike)
    }
    if (userLiked) {
      const
        indexOfLike       = this.likes.indexOf(userLiked),
        indexOfLikeInPost = post.likes.indexOf(userLiked),
        indexOfLikeInUser = this.root.log.currentUser.likes.indexOf(userLiked)

      await this.unlike(userLiked.id)

      this.likes.splice(indexOfLike, 1)
      post.likes.splice(indexOfLikeInPost, 1)
      post.likes.splice(indexOfLikeInUser, 1)
    }


  }


}
