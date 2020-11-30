import {Injectable}         from "@angular/core";
import {RootStore}          from "../root.store";
import {action, observable} from "mobx-angular";
import {Router}             from "@angular/router";
import {HttpHeaders}        from "@angular/common/http";

@Injectable({providedIn: "root"})


export class SignupStore {

  @observable userName: string = ''

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(
    public root: RootStore,
    private router: Router
  ) {
    this.root.sus = this;
  }

  @action routeToLogin() {
    this.router.navigateByUrl('login').then()
    this.root.us.getUsers()
  }

  @action
  async handleSignUp() {
    const userInput = {
      name: this.userName.toLowerCase()
    }
    if (this.userName) {
      this.userName = ''
      this.routeToLogin()
      console.log('user has been created')
      const newUser = await this.root.userAdapter.createNewUser(userInput)
      this.root.us.users.push(newUser)


    }


  }
}
