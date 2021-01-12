import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA}           from "@angular/material/dialog";

@Component({
  selector: 'mem-post-img-dialog',
  templateUrl: './post-img-dialog.component.html',
  styleUrls: ['./post-img-dialog.component.css']
})
export class PostImgDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public memeUrl: string) { }

  ngOnInit(): void {
  }

}
