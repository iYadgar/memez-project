//region imports
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA}           from '@angular/material/dialog';
import {ILike}                     from "../../../../../../../../shared/types/Entities/ILike";

//endregion


@Component({
  selector   : 'mem-dialog-box',
  templateUrl: './like-dialog-box.component.html',
  styleUrls  : ['./like-dialog-box.component.css']
})
export class LikeDialogBoxComponent implements OnInit {



  constructor(
    @Inject(MAT_DIALOG_DATA) public likes: ILike[]) {
    window['likeDialogBox'] = this;

  }

  ngOnInit(): void {

  }

}
