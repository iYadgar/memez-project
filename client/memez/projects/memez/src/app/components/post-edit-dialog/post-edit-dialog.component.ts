import {Component, Inject, OnInit}     from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IPost}                         from "../../../../../../../../shared/types/Entities/IPost";

@Component({
  selector   : 'mem-post-edit-dialog',
  templateUrl: './post-edit-dialog.component.html',
  styleUrls  : ['./post-edit-dialog.component.css']
})
export class PostEditDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PostEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public post: IPost) {
  }

  ngOnInit(): void {
  }

  close(value) {
    this.dialogRef.close(value)
  }


}
