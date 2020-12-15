import {Injectable}         from "@angular/core";
import {RootStore}          from "../root.store";
import {action, observable} from "mobx-angular";
import {Router}             from "@angular/router";
import {HttpHeaders}        from "@angular/common/http";
import {UserAdapter}        from "../../adapters/user.adapter";
import {IUser}              from "../../../../../../../../shared/types/Entities/IUser";

@Injectable({providedIn: "root"})


export class SignupStore {
  @observable emailError: string = ''


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(
    public root: RootStore,
    private router: Router,
    private userAdapter: UserAdapter
  ) {
    this.root.sus = this;
  }

  @action
  async routeToLogin() {
    await this.router.navigateByUrl('feed')

  }

  @action
  async handleSignUp(user: IUser) {
    try {
      user.email = user.email.toLowerCase()
      user.name = user.name.toLowerCase()

      const newUser = await this.userAdapter.createNewUser(user)

      this.routeToLogin()
      console.log('user has been created')
      await this.root.us.getUsers()
    } catch (e) {
      if (e.status === 409) {
        this.emailError = e.error.msg
      } else {
        this.emailError = 'something went wrong...'
      }
    }


  }
}
