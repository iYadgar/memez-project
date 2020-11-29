import {Injectable} from '@angular/core';
import {RootStore} from '../root.store';
import {MatDialog} from '@angular/material/dialog';
import {action} from 'mobx-angular';
import {IPost} from '../../../../../../../../shared/types/Entities/IPost';
import {LikeDialogBoxComponent} from '../../components/like-dialog-box/like-dialog-box.component';

@Injectable({providedIn: 'root'})

export class FeedStore {

  constructor(public root: RootStore,
              public dialog: MatDialog) {
    window['feedStore'] = this;
    this.root.fs = this;
  }

  @action handleDialog(post: IPost) {

    const
      user_ids = post.likes.map(i => i.user_id),
      users = this.root.us.users.filter(u => user_ids.includes(u.id));
    this.dialog.open(LikeDialogBoxComponent, {data: users});

  }


}
