import {Injectable}    from "@angular/core";
import {RootStore}     from "../root.store";
import {autorun, toJS} from "mobx";
import {Router}        from "@angular/router";

@Injectable({providedIn: "root"})
export class LayoutStore {


  constructor(
    public root: RootStore,
    public router: Router) {
    this.root.ls = this;
    window['layoutStore'] = this;
    autorun(() => {

    })
  }

  routeToFeed() {
    this.router.navigateByUrl('feed').then()
  }

  routeToProfile() {
    this.router.navigateByUrl('profile')
      .then();

  }

   


}
