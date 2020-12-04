import {Component, Inject, OnInit}                from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {toJS}                                     from 'mobx';
import {IUser}                                    from '../../../../../../../../shared/types/Entities/IUser';

@Component({
             selector   : 'mem-dialog-box',
             templateUrl: './like-dialog-box.component.html',
             styleUrls  : ['./like-dialog-box.component.css']
           })
export class LikeDialogBoxComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IUser[]) {
    window['likeDialogBox'] = this;

  }

  ngOnInit(): void {
    console.log(toJS(this.data));
  }

}
