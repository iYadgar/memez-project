//region imports
import {Injectable}    from '@angular/core';
import {UserStore}     from './entities/user.store';
import {PostStore}     from './entities/post.store';
import {LoginStore}    from './views/login.store';
import {LikeStore}     from './entities/like.store';
import {toJS}          from 'mobx';
import {FeedStore}     from './views/feed.store';
import {LayoutStore}   from "./views/layout.store";
import {SignupStore}   from "./views/signup.store";
import {AuthStore}     from "./views/auth.store";
import {BaseSocketAdapter} from "../adapters/base-socket-adapter.service";
import {UploadStore}   from "./upload.store";
//endregion


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
  as: AuthStore;
  ups: UploadStore;


  constructor(public socketAdapter: BaseSocketAdapter) {
    window['root'] = this;
    window['js'] = data => toJS(data, {recurseEverything: true});
  }
}
