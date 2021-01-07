//region imports
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RootStore}                                  from '../../stores/root.store';
import {PostStore}                                  from '../../stores/entities/post.store';
import {UserStore}                                  from '../../stores/entities/user.store';
import {LoginStore}                                 from '../../stores/views/login.store';
import {LikeStore}                                  from '../../stores/entities/like.store';
import {FeedStore}                                  from '../../stores/views/feed.store';
import {LayoutStore}                                from "../../stores/views/layout.store";
import {SignupStore}                                from "../../stores/views/signup.store";
import {AuthStore}                                  from "../../stores/views/auth.store";
import {iif}                                        from "rxjs";

//endregion


@Component({
  selector       : 'mem-layout',
  templateUrl    : './layout.component.html',
  styleUrls      : ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {

  constructor(
    public root: RootStore,
    public ps: PostStore,
    public us: UserStore,
    public log: LoginStore,
    public likeStore: LikeStore,
    public fs: FeedStore,
    public ls: LayoutStore,
    public sus: SignupStore,
    public as: AuthStore
  ) {

    //IIFE
    (async () => {
      if (this.log.currentUser) {
        await this.ps.getPosts()
      }
    })()

  }

  ngOnInit(): void {
  }
}
