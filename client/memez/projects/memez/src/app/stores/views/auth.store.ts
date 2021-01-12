//region imports
import {Injectable}    from "@angular/core";
import {RootStore}     from "../root.store";
import {AuthAdapter}   from "../../adapters/auth.adapter";
import {action}        from "mobx-angular";
import {IUser}         from "../../../../../../../../shared/types/Entities/IUser";
import {toJS}          from "mobx";
import {IAuthResponse} from "../../../../../../../../shared/types/IAuthResponse";

//endregion


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


    return this.authAdapter.isAuthenticated()

  }

  @action
  async getCurrentUser() {
    this.root.log.currentUser = await this.authAdapter.getCurrentUser()

  }

}
