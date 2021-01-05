//region imports
import {Injectable}              from "@angular/core";
import {RootStore}               from "../root.store";
import {action, observable}      from "mobx-angular";
import {Router}                  from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserAdapter}             from "../../adapters/user.adapter";
import {IUser}                   from "../../../../../../../../shared/types/Entities/IUser";

//endregion


@Injectable({providedIn: "root"})


export class SignupStore {
  @observable emailError: string = ''


  constructor(
    public root: RootStore,
    private router: Router,
    private userAdapter: UserAdapter,
    private http: HttpClient
  ) {
    this.root.sus = this;
    window['signUpStore'] = this;
  }

  @action
  async routeToLogin() {
    await this.router.navigateByUrl('login')

  }

  @action
  async handleSignUp(user: IUser) {
    user.email = user.email.toLowerCase()
    user.name = user.name.toLowerCase()
    if (this.root.us.avatarUrl) {
      user.avatar = this.root.us.avatarUrl
    }
    try {
      await this.userAdapter.createNewUser(user)
      await this.routeToLogin()
      console.log('user has been created')

    } catch (e) {
      if (e.status === 409) {
        this.emailError = e.error.msg
      } else {
        this.emailError = 'something went wrong...'
      }
    }


  }


}


