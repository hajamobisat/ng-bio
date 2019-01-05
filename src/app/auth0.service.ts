import { Injectable } from '@angular/core';
// import {tokenNotExpired} from 'angular2-jwt';
// import { filter } from 'rxjs/operators';
// import * as auth0 from 'auth0-js';

declare var Auth0Lock: any;

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  // lock = new Auth0Lock('2jBoD3lhmlVdXGY6DVc9YjKGLHlALKaX','hajamobisat.auth0.com',{});

  // constructor() {
  //   this.lock.on('authenticated', authResult=>{
  //     localStorage.setItem('id_token', authResult.idToken);
  //   });
  //  }

  //  public login(){
  //    this.lock.show();
  //  }

  //  public isAuthenticated(){
  //    return tokenNotExpired;
  //  }

  //  public logout(){
  //    localStorage.removeItem('id_token');
  //  }
}
