import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost}                                          from '../../../../../../../../shared/types/Entities/IPost';

@Component({
  selector   : 'mem-post',
  templateUrl: './post.component.html',
  styleUrls  : ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  @Output() postDeleted = new EventEmitter();
  @Output() postLiked   = new EventEmitter();
  @Output() likeClicked = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  //event handler function
  onPostDeleted(val: IPost) {
    this.postDeleted.emit(val);
  }

  onPostLiked(post: IPost) {
    this.postLiked.emit(post);
  }
  onDashboardClicked(post : IPost){
    this.likeClicked.emit(post)
  }

}
