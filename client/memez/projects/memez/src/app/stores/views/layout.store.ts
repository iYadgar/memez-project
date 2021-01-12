//region imports
import {Injectable}    from "@angular/core";
import {RootStore}     from "../root.store";

import {Router}        from "@angular/router";
//endregion
 

@Injectable({providedIn: "root"})
export class LayoutStore {


  constructor(
    public root: RootStore,
    public router: Router) {
    this.root.ls = this;
    window['layoutStore'] = this;

  }

  async routeToFeed() {
    await this.router.navigateByUrl('feed')
  }

  async routeToProfile() {
    await this.router.navigateByUrl('profile')
  }


}
