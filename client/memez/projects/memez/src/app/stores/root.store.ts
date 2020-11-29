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
import {SignupStore} from "./views/signup-store.service";

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


  constructor(
    public postAdapter: PostAdapter,
    public userAdapter: UserAdapter,
    public likeAdapter: LikeAdapter
  ) {
    window['root'] = this;
    window['js'] = data => toJS(data, {recurseEverything: true});
  }
}
