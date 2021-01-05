//region imports
import {Injectable}          from '@angular/core';
import {AuthStore}           from "../stores/views/auth.store";
import {CanActivate, Router} from "@angular/router";

//endregion


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public authStore: AuthStore,
    public router: Router) {
  }

  async canActivate(): Promise<boolean> {
    const auth: boolean = await this.authStore.isAuthenticated()


    if (!auth) {
      await this.router.navigateByUrl('login')
      return auth
    }
    return auth
  }


}
