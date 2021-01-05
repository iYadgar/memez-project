//region imports
import * as dayjs                     from "dayjs";
import {Injectable}                   from '@angular/core';
import {RootStore}                    from '../root.store';
import {MatDialog}                    from '@angular/material/dialog';
import {action, computed, observable} from 'mobx-angular';
import {IPost}                        from '../../../../../../../../shared/types/Entities/IPost';
import {LikeDialogBoxComponent}       from '../../components/like-dialog-box/like-dialog-box.component';
import {ILike}                        from "../../../../../../../../shared/types/Entities/ILike";
import {autorun}                      from "mobx";

//endregion


@Injectable({providedIn: 'root'})


export class FeedStore {
  @observable postLikes: ILike[]
  @observable searchTerm: string


  constructor(public root: RootStore,
    public dialog: MatDialog) {
    window['feedStore'] = this;
    this.root.fs = this;
    autorun(() => {
      console.log(this.searchTerm)
    })
  }

  @computed get dateFormattedLikes() {
    return this.postLikes.map(like => {
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
    this.postLikes = await this.root.likeStore.getPostLikes(post._id)

    this.dialog.open(LikeDialogBoxComponent, {data: this.dateFormattedLikes});

  }

  @action
  onSearch(value: string) {
    setTimeout(() => {
      this.searchTerm = value
    }, 750)

  }

}
