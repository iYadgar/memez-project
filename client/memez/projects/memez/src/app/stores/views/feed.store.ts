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
import {PostEditDialogComponent}      from "../../components/post-edit-dialog/post-edit-dialog.component";

//endregion


@Injectable({providedIn: 'root'})


export class FeedStore {
  @observable postLikes: ILike[]
  @observable searchTerm: string


  constructor(public root: RootStore,
    public dialog: MatDialog) {
    window['feedStore'] = this;
    this.root.fs = this;
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
  async handLikesleDialog(post: IPost) {
    this.postLikes = await this.root.likeStore.getPostLikes(post._id)

    this.dialog.open(LikeDialogBoxComponent, {data: this.dateFormattedLikes});

  }

  @action
  onSearch(value: string) {
    setTimeout(() => {
      this.searchTerm = value
    }, 750)

  }

  @action
  async handleEditPostDialog(post: IPost) {
    const
      dialogRef      = this.dialog.open(PostEditDialogComponent, {data: post}),
      postNewContent = await dialogRef.afterClosed().toPromise();
    this.root.ups.loading = true
    await this.root.ps.updatePostContent(post._id, postNewContent)
    post.content = postNewContent
    this.root.ups.loading = false

  }

}
