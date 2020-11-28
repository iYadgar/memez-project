import {BrowserModule}           from '@angular/platform-browser';
import {NgModule}                from '@angular/core';
import {AppRoutingModule}        from './app-routing.module';
import {LayoutComponent}         from './views/layout/layout.component';
import {FeedComponent}           from './views/feed/feed.component';
import {UserProfileComponent}    from './views/user-profile/user-profile.component';
import {PostComponent}           from './components/post/post.component';
import {HttpClientModule}        from '@angular/common/http';
import {MobxAngularModule}       from 'mobx-angular';
import {NavbarComponent}         from './views/layout/navbar/navbar.component';
import {PostBoxComponent}        from './components/post-box/post-box.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent}          from './views/login/login.component';
import {MatButtonModule}         from '@angular/material/button';
import {MatIconModule}           from '@angular/material/icon';
import {LikeDialogBoxComponent}  from './components/like-dialog-box/like-dialog-box.component';
import {MatDialogModule}         from '@angular/material/dialog';


@NgModule({
  declarations: [
    LayoutComponent,
    FeedComponent,
    UserProfileComponent,
    PostComponent,
    NavbarComponent,
    PostBoxComponent,
    LoginComponent,
    LikeDialogBoxComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MobxAngularModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule


  ],
  providers   : [],
  bootstrap   : [LayoutComponent]
})
export class AppModule {
}
