import {Injectable}      from '@angular/core';
import {BaseAjaxAdapter} from './base-ajax.adapter';
import {IUser}           from '../types/Entities/IUser';
import {HttpClient}      from '@angular/common/http';


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

}
