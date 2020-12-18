import {Injectable}  from "@angular/core";
import {RootStore}   from "../root.store";
import {AuthAdapter} from "../../adapters/auth.adapter";
import {action}      from "mobx-angular";
import {IUser}       from "../../../../../../../../shared/types/Entities/IUser";

@Injectable({
  providedIn: "root"
})

export class AuthStore {

  constructor(public root: RootStore,
    private authAdapter: AuthAdapter) {
    window['authStore'] = this;
    this.root.as = this;
    (async () => {
      try {
        await this.getCurrentUser()
      } catch (e) {
        console.log(e, 'e');
      }
    })()

  }

  async isAuthenticated(): Promise<boolean> {
    const response = await this.authAdapter.isAuthenticated()
    return response

  }

  @action
  async getCurrentUser() {
    this.root.log.currentUser = await this.authAdapter.getCurrentUser()

  }

}
