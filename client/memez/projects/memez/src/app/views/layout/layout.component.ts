import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {RootStore}         from '../../stores/root.store';
import {PostStore}         from '../../stores/entities/post.store';
import {UserStore}         from '../../stores/entities/user.store';
import {LoginStore}        from '../../stores/views/login.store';
import {LikeStore}         from '../../stores/entities/like.store';
import {FeedStore}         from '../../stores/views/feed.store';
import {LayoutStore}       from "../../stores/views/layout.store";
import {SignupStore}       from "../../stores/views/signup-store.service";

@Component({
  selector   : 'mem-layout',
  templateUrl: './layout.component.html',
  styleUrls  : ['./layout.component.css']
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
    public sus: SignupStore
  ) {

    (async () => {
        await this.us.getUsers();
        await this.ps.getPosts();
        /*await this.likeStore.getLikes();*/
      }
    )();  //IIFE

  }

  ngOnInit(): void {
  }
}
