//region imports
import {BrowserModule}                    from '@angular/platform-browser';
import {NgModule}                         from '@angular/core';
import {AppRoutingModule}                 from './app-routing.module';
import {LayoutComponent}                  from './views/layout/layout.component';
import {FeedComponent}                    from './views/feed/feed.component';
import {UserProfileComponent}             from './views/user-profile/user-profile.component';
import {PostComponent}                    from './components/post/post.component';
import {HttpClientModule}                 from '@angular/common/http';
import {MobxAngularModule}                from 'mobx-angular';
import {NavbarComponent}                  from './views/layout/navbar/navbar.component';
import {PostBoxComponent}                 from './components/post-box/post-box.component';
import {BrowserAnimationsModule}          from '@angular/platform-browser/animations';
import {LoginComponent}                   from './views/login/login.component';
import {MatButtonModule}                  from '@angular/material/button';
import {LikeDialogBoxComponent}           from './components/like-dialog-box/like-dialog-box.component';
import {SignUpComponent}                  from './views/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProfileImgComponent}              from './components/profile-img/profile-img.component';
import {MatIconModule}                    from "@angular/material/icon";
import {MatDialogModule}                  from "@angular/material/dialog";
import {MatMenuModule}                    from "@angular/material/menu";
import {MatFormFieldModule}               from "@angular/material/form-field";
import {PostDialogBoxComponent}           from './components/post-dialog-box/post-dialog-box.component';
import {MatInputModule}                   from "@angular/material/input";
import {PostImgDialogComponent}           from "./components/post-img-dialog/post-img-dialog.component";
import {MatProgressSpinnerModule}         from "@angular/material/progress-spinner";
import { PostEditDialogComponent } from './components/post-edit-dialog/post-edit-dialog.component';


//endregion


@NgModule({
  declarations: [
    LayoutComponent,
    FeedComponent,
    UserProfileComponent,
    PostComponent,
    NavbarComponent,
    PostBoxComponent,
    LoginComponent,
    LikeDialogBoxComponent,
    SignUpComponent,
    ProfileImgComponent,
    PostDialogBoxComponent,
    PostImgDialogComponent,
    PostEditDialogComponent


  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MobxAngularModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule


  ],
  providers   : [],
  bootstrap   : [LayoutComponent]
})
export class AppModule {
}
