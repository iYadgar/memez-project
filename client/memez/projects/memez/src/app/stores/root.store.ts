import {Injectable}  from '@angular/core';
import {UserStore}   from './entities/user.store';
import {PostAdapter} from '../adapters/post.adapter';
import {UserAdapter} from '../adapters/user.adapter';
import {PostStore}   from './entities/post.store';
import {LoginStore}  from './views/login.store';
import {LikeStore}   from './entities/like.store';
import {LikeAdapter} from '../adapters/like.adapter';
import {toJS}        from 'mobx';
import {FeedStore}   from './views/feed.store';
import {LayoutStore} from "./views/layout.store";
import {SignupStore} from "./views/signup.store";
import {SocketAdapter} from "../adapters/socket-adapter";

@Injectable({
  providedIn: 'root'
})
export class RootStore {
  ps: PostStore;
  us: UserStore;
  log: LoginStore;
  likeStore: LikeStore;
  fs: FeedStore;
  ls: LayoutStore;
  sus: SignupStore;


  constructor(public socketAdapter:SocketAdapter) {
    console.log('ROOT CTOR!');
    window['root'] = this;
    window['js'] = data => toJS(data, {recurseEverything: true});
  }
}
