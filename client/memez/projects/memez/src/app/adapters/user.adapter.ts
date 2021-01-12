//region imports
import {Injectable}              from '@angular/core';
import {BaseAjaxAdapter}         from './base-ajax.adapter';
import {IUser}                   from '../../../../../../../shared/types/Entities/IUser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BaseSocketAdapter}       from "./base-socket-adapter.service";
import {IUserResponse}           from "../../../../../../../shared/types/Entities/IUserResponse";

//endregion


@Injectable({
  providedIn: 'root'
})
export class UserAdapter  {


  constructor(public socketAdapter : BaseSocketAdapter) {


    window['UserAdapter'] = this;
  }

  async getUsers(): Promise<IUser[]> {
    return this.socketAdapter.request('getUsers');
  }

  async createNewUser(userName): Promise<IUserResponse> {
    return this.socketAdapter.request('createUser', userName);

  }

  async updateUserPhoto(user_id: string, avatarUrl: string) {
    return this.socketAdapter.request(`updateUserPhoto`, {id: user_id, avatar: avatarUrl})
  }


}
