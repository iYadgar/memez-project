//region imports
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

//endregion


@Component({
  selector   : 'mem-post-box',
  templateUrl: './post-box.component.html',
  styleUrls  : ['./post-box.component.css']
})
export class PostBoxComponent implements OnInit {
  @Output() newPost = new EventEmitter();
  @Output() imgUpload = new EventEmitter();
  @Input() currentUserPhoto: string;
  @Input() postImgUrl: string

  constructor() {
  }

  ngOnInit(): void {
  }

  postToFeed(val) {
    this.newPost.emit(val);
  }

  onImgUpload(uploadEvent) {
    this.imgUpload.emit(uploadEvent)
  }

}
