import {Injectable}         from '@angular/core';
import {RootStore}          from '../root.store';
import {action, observable} from 'mobx-angular';
import {IUser}              from '../../../../../../../../shared/types/Entities/IUser';
import {Router}             from '@angular/router';
import {LoginAdapter}       from "../../adapters/login.adapter";

export interface ILoginDetails {
  email: string,
  password: string
}

@Injectable({providedIn: 'root'})


export class LoginStore {
  @observable currentUser: IUser;
  @observable loginError: string = ''

  constructor(
    public root: RootStore,
    private router: Router,
    private loginAdapter: LoginAdapter
  ) {
    window['loginStore'] = this;
    this.root.log = this;

  }


  async verifyUser(loginDetails: ILoginDetails) {
    return this.loginAdapter.login(loginDetails)


  }

  @action
  async handleLogin(loginDetails: ILoginDetails) {
    try {
      this.root.log.currentUser = await this.verifyUser(loginDetails)
      await this.router.navigateByUrl('feed')


    } catch (e) {
      this.loginError = e.error.msg
    }


  }

  @action
  async handleLogout() {
    await this.loginAdapter.logout()
    console.log('logged out')
    await this.router.navigateByUrl('/login')

  }

  routeToSignUp() {
    this.router.navigateByUrl('signup').then()
  }


}
