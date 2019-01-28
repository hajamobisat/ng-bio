import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { UserService } from '../shared/user.service';
import { AppUser } from '../model/app-user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
appUser$: Observable<AppUser>;

  constructor(public auth:AuthService, public userSerivce: UserService) {
  this.appUser$ = this.userSerivce.firestoreUser$;
 
   }

  ngOnInit() {
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

}
