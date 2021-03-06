//region imports
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserStore}                                  from '../../stores/entities/user.store';
//endregion



@Component({
  selector       : 'mem-user-profile',
  templateUrl    : './user-profile.component.html',
  styleUrls      : ['./user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {

  constructor(public us: UserStore) {
    (async ()=>{
        await this.us.root.ps.getPosts()
    })()

  }

  async ngOnInit(): Promise<void> {

  }

}
