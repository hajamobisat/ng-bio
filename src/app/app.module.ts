import { AdminAuthGuardService } from './shared/admin-auth-guard.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { environment } from './../environments/environment';

import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireAuthModule} from '@angular/fire/auth'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthService } from './shared/auth.service';
import { EventsComponent } from './events/events.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    EventsComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

    RouterModule.forRoot([
      {path:'home', component: HomeComponent, canActivate:[AuthGuardService] },
      {path:'setting', component: SettingComponent, canActivate:[AuthGuardService, AdminAuthGuardService]  }

    ])
  ],
  providers: [AuthService, AuthGuardService, AdminAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
