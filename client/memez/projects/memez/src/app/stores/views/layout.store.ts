import {Injectable} from "@angular/core";
import {RootStore} from "../root.store";
import {autorun, toJS} from "mobx";

@Injectable({providedIn: "root"})
export class LayoutStore {


  constructor(public root: RootStore) {
    this.root.ls = this;
    window['layoutStore'] = this;
    autorun(() => {
      console.log(JSON.stringify(toJS(this.root.us.users)))
    })
  }
}
