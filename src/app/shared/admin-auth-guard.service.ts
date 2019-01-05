import { AppUser } from './../model/app-user';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth:AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean>{
    return this.userService.firestoreUser$.pipe(
      take(1),
      map(user => user && user.roles.admin ? true : false),
      tap(isAdmin => {
        if (!isAdmin) console.error('Access denied - Admins only');
      }));
  }
}
