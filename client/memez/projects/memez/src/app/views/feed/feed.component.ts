import {Component, OnInit} from '@angular/core';
import {RootStore}         from '../../stores/root.store';
import {PostStore}         from '../../stores/entities/post.store';
import {FeedStore}         from '../../stores/views/feed.store';


@Component({
  selector   : 'mem-feed',
  templateUrl: './feed.component.html',
  styleUrls  : ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(
    public fs: FeedStore
  ) {
  }

  ngOnInit(): void {
  }

}
