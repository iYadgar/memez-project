import {Injectable}      from "@angular/core";
import {BaseAjaxAdapter} from "./base-ajax.adapter";
import {HttpClient}      from "@angular/common/http";
import {IUser}           from "../../../../../../../shared/types/Entities/IUser";

@Injectable({
  providedIn: "root"
})

export class AuthAdapter extends BaseAjaxAdapter {
  constructor(http: HttpClient) {
    super(http);
  }

  async isAuthenticated(): Promise<boolean> {
    return this.request('isAuthenticated')
  }

  async getCurrentUser(): Promise<IUser> {
    return this.request('currentuser')
  }
}
