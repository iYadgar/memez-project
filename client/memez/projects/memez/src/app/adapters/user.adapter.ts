//region imports
import {Injectable}              from '@angular/core';
import {BaseAjaxAdapter}         from './base-ajax.adapter';
import {IUser}                   from '../../../../../../../shared/types/Entities/IUser';
import {HttpClient, HttpHeaders} from '@angular/common/http';

//endregion


@Injectable({
  providedIn: 'root'
})
export class UserAdapter extends BaseAjaxAdapter {


  constructor(
    http: HttpClient,
  ) {
    super(http);

    window['UserAdapter'] = this;
  }

  async getUsers(): Promise<IUser[]> {
    return this.request('users');
  }

  async createNewUser(userName): Promise<IUser> {
    return this.post('users', userName);

  }


}
