import {Injectable}         from '@angular/core';
import {action, observable} from 'mobx-angular';
import {ILike}              from '../../../../../../../../shared/types/Entities/ILike';
import {RootStore}          from '../root.store';
import {MOCK_LIKES}         from '../../../../../../../../shared/mock/MOCK_LIKES';
import {IPost}              from '../../../../../../../../shared/types/Entities/IPost';
import * as dayjs           from 'dayjs';
import {autorun}            from 'mobx';
import {MatDialog}              from '@angular/material/dialog';
import {LikeDialogBoxComponent} from '../../components/like-dialog-box/like-dialog-box.component';


@Injectable({providedIn: 'root'})

export class LikeStore {
  @observable likes: ILike[] = [];
  USE_MOCK: boolean          = false;

  constructor(
    public root: RootStore) {
    window['likeStore'] = this;
    this.root.likeStore = this;

  }

  @action
  async getLikes(): Promise<ILike[]> {
    if (this.USE_MOCK) {
      return this.likes = MOCK_LIKES;
    }
    return this.likes = await this.root.likeAdapter.getLikes();
  }

  @action createLike(post: IPost) {
    let newLike: ILike = {
      id       : `${Math.floor((Math.random()) * 100)}`,
      timestamp: dayjs().format('DD.MM.YY'),
      user_id  : this.root.log.currentUser.id,
      post_id  : post.id
    };
    // Push to current post likes array
    this.root.ps.postLiked(post, newLike);

    // Push to current user likes array
    this.root.us.likedPost(newLike);

    // Push to likes array
    this.likes.push(newLike);


  }


}
