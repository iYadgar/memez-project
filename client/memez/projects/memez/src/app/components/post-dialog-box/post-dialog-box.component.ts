import {Component, Inject, OnInit}     from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector   : 'mem-post-dialog-box',
  templateUrl: './post-dialog-box.component.html',
  styleUrls  : ['./post-dialog-box.component.css']
})
export class PostDialogBoxComponent implements OnInit {


  constructor(
    private dialogRef: MatDialogRef<PostDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public url: string
  ) {
  }

  ngOnInit(): void {
  }

  close(value) {
    this.dialogRef.close(value)
  }

}
