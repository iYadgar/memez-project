import {Injectable}             from '@angular/core';
import {RootStore}              from '../root.store';
import {MatDialog}              from '@angular/material/dialog';
import {action, observable}     from 'mobx-angular';
import {IPost}                  from '../../../../../../../../shared/types/Entities/IPost';
import {LikeDialogBoxComponent} from '../../components/like-dialog-box/like-dialog-box.component';
import {ILike}                  from "../../../../../../../../shared/types/Entities/ILike";


@Injectable({providedIn: 'root'})


export class FeedStore {
  @observable data: ILike[]

  constructor(public root: RootStore,
    public dialog: MatDialog) {
    window['feedStore'] = this;
    this.root.fs = this;
  }

  @action
  async handleDialog(post: IPost) {
    this.data = await this.root.likeStore.getPostLikes(post._id)

    this.dialog.open(LikeDialogBoxComponent, {data: this.data});

  }


}
