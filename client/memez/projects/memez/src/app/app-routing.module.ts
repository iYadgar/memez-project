import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FeedComponent}        from './views/feed/feed.component';
import {UserProfileComponent} from './views/user-profile/user-profile.component';
import {LoginComponent}       from './views/login/login.component';
import {SignUpComponent}      from "./views/sign-up/sign-up.component";
import {AuthGuardService}     from "./services/auth-guard.service";


const routes: Routes = [
  {
    path     : '',
    component: LoginComponent,

  },
  {
    path     : 'login',
    component: LoginComponent
  },
  {
    path       : 'feed',
    component  : FeedComponent,
    canActivate: [AuthGuardService]
  },
  {
    path       : 'profile',
    component  : UserProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path     : 'signup',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
