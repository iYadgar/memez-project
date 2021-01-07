//region imports
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FeedStore}                                  from '../../stores/views/feed.store';
import {iif}                                        from "rxjs";
import {toJS}                                       from "mobx";
import {PostStore}                                  from "../../stores/entities/post.store";

//endregion


@Component({
  selector       : 'mem-feed',
  templateUrl    : './feed.component.html',
  styleUrls      : ['./feed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FeedComponent implements OnInit {

  constructor(
    public fs: FeedStore
  ) {
    (async () => {

        try {
          await this.fs.root.ps.getPosts()
          console.log('got posts')
        } catch (e) {
          console.log('there was problem getting', e);
        }


      }
    )();


  }

  async ngOnInit(): Promise<void> {


  }

}
