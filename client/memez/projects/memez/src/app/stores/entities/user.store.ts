import {Injectable}         from '@angular/core';
import {action, observable} from 'mobx-angular';
import {RootStore}          from '../root.store';
import {IUser}              from '../../types/Entities/IUser';

import {autorun}    from 'mobx';
import {MOCK_USERS} from '../../../../../../../../shared/mock/MOCK_USERS';
import {ILike}      from '../../types/Entities/ILike';

@Injectable({
  providedIn: 'root'
})
export class UserStore {
  useMock: boolean                  = true;
  @observable public users: IUser[] = [];

  constructor(
    public root: RootStore
  ) {
    this.root.us        = this;
    window['userStore'] = this;
    autorun(() => {
      console.log(`users array has changed to ${this.users.map(user => user.name)}`);
    });
  }

  @action
  async getUsers(): Promise<IUser[]> {
    if (this.useMock) {
      this.users = MOCK_USERS;
      return this.users;
    }

    return this.users = await this.root
                                  .userAdapter
                                  .getUsers();
  }

  @action likedPost(like: ILike) {
    this.root.log.currentUser.likes.push(like);
  }
}
