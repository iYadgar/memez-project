//region imports
import {Injectable}         from '@angular/core';
import {action, observable} from 'mobx-angular';
import {RootStore}          from '../root.store';
import {IUser}              from '../../../../../../../../shared/types/Entities/IUser';
import {UserAdapter}        from "../../adapters/user.adapter";
import {UploadAdapter}      from "../../adapters/upload.adapter";
import {UploadStore}        from "../upload.store";

/*import {MOCK_USERS}         from '../../../../../../../../shared/mock/MOCK_USERS';*/

//endregion


@Injectable({
  providedIn: 'root'
})
export class UserStore {
  /*useMock: boolean = false;*/
  @observable public users: IUser[] = [];
  @observable avatarUrl: string


  constructor(
    public root: RootStore,
    private userAdapter: UserAdapter,
    private uploadStore: UploadStore
  ) {
    this.root.us = this;
    window['userStore'] = this;

  }

  @action
  async getUsers(): Promise<IUser[]> {


    return this.users = await this
      .userAdapter
      .getUsers();
  }

  @action
  async onProfilePictureUpload(event) {
    this.avatarUrl = await this.root.ups.onFileUpload(event)

  }


}
