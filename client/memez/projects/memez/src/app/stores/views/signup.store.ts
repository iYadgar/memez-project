//region imports
import {Injectable}              from "@angular/core";
import {RootStore}               from "../root.store";
import {action, observable}      from "mobx-angular";
import {Router}                  from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserAdapter}             from "../../adapters/user.adapter";
import {IUser}                   from "../../../../../../../../shared/types/Entities/IUser";
import {IUserResponse}           from "../../../../../../../../shared/types/Entities/IUserResponse";
import {logoutHandler}           from "../../../../../../../../server2/ajax-handlers/login.handler";

//endregion


@Injectable({providedIn: "root"})


export class SignupStore {
  @observable errorMessage: string = ''


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
      const userResponse: IUserResponse = await this.userAdapter.createNewUser(user)
      console.log(userResponse.isCreated, 'userResponse.isCreated');
      if (!userResponse.isCreated) {
        this.errorMessage = userResponse.msg
        return
      }
      console.log(userResponse.msg)
      await this.routeToLogin()
    } catch (e) {
      console.log(e)
    }


  }
}

