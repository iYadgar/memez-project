import {Injectable} from '@angular/core';
import {RootStore} from '../root.store';
import {action, observable} from 'mobx-angular';
import {IUser} from '../../types/Entities/IUser';
import {Router} from '@angular/router';
import {autorun, toJS} from 'mobx';
import {MOCK_POSTS} from '../../../../../../../../shared/mock/MOCK_POSTS';
import {MOCK_LIKES} from '../../../../../../../../shared/mock/MOCK_LIKES';

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
    let found = this.root.us.users.some(ele => ele.name === name);
    if (found) {
      alert('User already exist');
      return;
    }
    if (name && !found) {
      this.currentUser = {
        id: Math.floor(Math.random() * (100 - 11) + 11),
        name: name.toLowerCase(),
        posts: [],
        likes: []
      };

      // temporary ! ! !
      this.root.us.users.push(this.currentUser)

    }

  }

  handleLogin(name: string) {
    this.verifyUser(name);
    if (this.currentUser) {
      this.router.navigateByUrl('feed').then();
    }


  }
}
