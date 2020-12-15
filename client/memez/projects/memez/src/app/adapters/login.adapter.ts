import {Injectable}      from '@angular/core';
import {BaseAjaxAdapter} from './base-ajax.adapter';
import {HttpClient}      from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginAdapter extends BaseAjaxAdapter {

  constructor(
    http: HttpClient,
  ) {
    super(http);

    window['loginAdapter'] = this;
  }

  async login(loginDetails) {

    return this.post('login', loginDetails)
  }

  async logout() {
    return this.request('logout');
  }


}
