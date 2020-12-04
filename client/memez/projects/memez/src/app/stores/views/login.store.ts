import {Injectable}         from '@angular/core';
import {RootStore}          from '../root.store';
import {action, observable} from 'mobx-angular';
import {IUser}              from '../../../../../../../../shared/types/Entities/IUser';
import {Router}             from '@angular/router';


@Injectable({providedIn: 'root'})

export class LoginStore {
  @observable currentUser: IUser;

  constructor(
    public root: RootStore,
    private router: Router
  ) {
    window['loginStore'] = this;


    this.root.log = this;

  }


  @action verifyUser(name: string) {
    const foundUser = this.root.us
      .users
      .find(user => user.name.toLowerCase() === name.toLowerCase())
    if (!foundUser) {
      return alert('user does not exist...')
    }
    return this.currentUser = foundUser


  }

  @action handleLogin(name: string) {
    this.verifyUser(name);
    if (this.currentUser) {
      this.router.navigateByUrl('feed').then();
    }

  }

  routeToSignUp() {
    this.router.navigateByUrl('signup').then()
  }
}
