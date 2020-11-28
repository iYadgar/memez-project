import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector   : 'mem-post-box',
  templateUrl: './post-box.component.html',
  styleUrls  : ['./post-box.component.css']
})
export class PostBoxComponent implements OnInit {
  @Output() newPost = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  postToFeed(val) {
    this.newPost.emit(val);
  }

}
