
import { NotificationService } from './shared/notification.service';
import { UserService } from './shared/user.service';
import { AdminAuthGuardService } from './shared/admin-auth-guard.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { environment } from './../environments/environment';

import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthService } from './shared/auth.service';
import { EventsComponent } from './events/events.component';
import { SettingComponent } from './setting/setting.component';
import { UsersComponent } from './users/users.component';
import { MatNavBarComponent } from './mat-nav-bar/mat-nav-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { NomatUserComponent } from './nomat-user/nomat-user.component';
import { NomatUserService } from './shared/nomat-user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    EventsComponent,
    SettingComponent,
    UsersComponent,
    MatNavBarComponent,
    UserListComponent,
    NomatUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      // { path: 'home', component: HomeComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      // { path: 'setting', component: SettingComponent },
      // { path: 'users', component: UsersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] }
      // { path: 'users', component: UsersComponent },
      { path: 'user-list', component: NomatUserComponent }

    ])
  ],
  providers: [AuthService, AuthGuardService, AdminAuthGuardService, UserService, NotificationService, NomatUserService],
  bootstrap: [AppComponent],
  entryComponents: [UsersComponent],
})
export class AppModule { }
