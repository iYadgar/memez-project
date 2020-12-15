import * as dayjs                     from "dayjs";
import {Injectable}                   from '@angular/core';
import {RootStore}                    from '../root.store';
import {MatDialog}                    from '@angular/material/dialog';
import {action, computed, observable} from 'mobx-angular';
import {IPost}                        from '../../../../../../../../shared/types/Entities/IPost';
import {LikeDialogBoxComponent}       from '../../components/like-dialog-box/like-dialog-box.component';
import {ILike}                        from "../../../../../../../../shared/types/Entities/ILike";


@Injectable({providedIn: 'root'})


export class FeedStore {
  @observable likes: ILike[]

  constructor(public root: RootStore,
    public dialog: MatDialog) {
    window['feedStore'] = this;
    this.root.fs = this;
  }

  @computed get dateFormatedLikes() {
    return this.likes.map(like => {
      return {
        _id    : like._id,
        created: dayjs(like.created).format('DD.MM.YYYY'),
        user_id: like.user_id,
        post_id: like.post_id
      }
    })
  }

  @action
  async handleDialog(post: IPost) {
    this.likes = await this.root.likeStore.getPostLikes(post._id)

    this.dialog.open(LikeDialogBoxComponent, {data: this.dateFormatedLikes});

  }


}
