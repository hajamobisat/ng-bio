import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private afAuth:AuthService, private router:Router) { }

  canActivate(route, state:RouterStateSnapshot){
   return this.afAuth.user$.pipe(map(user=>{
     if (user) return true;

     this.router.navigate(['/'], {queryParams:{returnUrl: state.url}});
     return false;
    }));
    
  }
}
