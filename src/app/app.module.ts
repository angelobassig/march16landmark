import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditSecurityComponent } from './components/edit-security/edit-security.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { PostComponent } from './components/post/post.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';

import { ProfileComponent } from './pages/profile/profile.component';

import { FriendRequestsComponent } from './components/friend-requests/friend-requests.component';
import { TagFriendsComponent } from './components/tag-friends/tag-friends.component';
import { ButtonComponent } from './components/button/button.component';
import { TestingComponent } from './components/testing/testing.component';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { CardComponent } from './components/card/card.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { SearchTabComponent } from './components/search-tab/search-tab.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // http://localhost:4200/,
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingsComponent },
  { path: ':profileUrl/friendslist', component: FriendsListComponent },
  { path: ':profileUrl/friendrequests', component: FriendRequestsComponent },
  { path: ':profileUrl/albums', component: AlbumsComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'search', component: SearchUsersComponent},
  { path: 'notFound', component: NotFoundComponent },
  { path: ':profileUrl', component: ProfileComponent},
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    EditProfileComponent,
    EditSecurityComponent,
    HomeComponent,
    LoginComponent,
    LoginFormComponent,
    NavbarComponent,
    NotFoundComponent,
    RegisterComponent,
    RegisterFormComponent,
    SettingsComponent,
    FriendsComponent,
    PostComponent,
    AvatarComponent,
    FriendsListComponent,
    FriendRequestsComponent,
    TagFriendsComponent,
    ButtonComponent,
    ProfileComponent,
    TestingComponent,
    NotificationCardComponent,
    ProfileComponent,
    SearchUsersComponent,
    CardComponent,
    AlbumsComponent,
    SearchTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
