import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FeedComponent}        from './views/feed/feed.component';
import {UserProfileComponent} from './views/user-profile/user-profile.component';
import {LoginComponent}       from './views/login/login.component';


const routes: Routes = [
  {
    path     : '',
    component: LoginComponent
  },
  {
    path     : 'feed',
    component: FeedComponent
  },
  {
    path     : 'profile',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
