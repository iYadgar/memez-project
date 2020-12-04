import {Injectable}         from '@angular/core';
import {action, observable} from 'mobx-angular';
import {RootStore}          from '../root.store';
import {IUser}              from '../../../../../../../../shared/types/Entities/IUser';
import {autorun, reaction}  from 'mobx';
/*import {MOCK_USERS}         from '../../../../../../../../shared/mock/MOCK_USERS';*/
import {ILike}              from '../../../../../../../../shared/types/Entities/ILike';


@Injectable({
  providedIn: 'root'
})
export class UserStore {
  /*useMock: boolean = false;*/
  @observable public users: IUser[] = [];

  constructor(
    public root: RootStore
  ) {
    this.root.us = this;
    window['userStore'] = this;

  }

  @action
  async getUsers(): Promise<IUser[]> {
    /*if (this.useMock) {
      this.users = MOCK_USERS;
      return this.users;
    }*/

    return this.users = await this.root
                                  .userAdapter
                                  .getUsers();
  }

 /* @action likedPost(like: ILike) {
    this.root.log.currentUser.likes.push(like);
  }*/


}
