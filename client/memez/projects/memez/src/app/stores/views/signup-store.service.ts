import {Injectable} from "@angular/core";
import {RootStore}  from "../root.store";
import {action}     from "mobx-angular";
import {Router}     from "@angular/router";

@Injectable({providedIn: "root"})

export class SignupStore {


  constructor(
    public root: RootStore,
    private router : Router
  ) {
    this.root.sus = this;
  }

  @action routeToLogin(){
    this.router.navigateByUrl(' ')
  }

  @action
  async handleSignUp(name: string) {
    if (name) {
      await this.root.userAdapter.createNewUser(name)
    }


  }
}
