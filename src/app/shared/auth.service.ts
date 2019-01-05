import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  returnUrl;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, 
    private router:Router,private afs: AngularFirestore){
    this.user$  = this.afAuth.authState;
   }

  login(){
    this.returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', this.returnUrl);

    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(credential =>{
      this.updateUserData(credential.user)
    });

  }

  updateUserData(user){
    this.afs.doc(`users/${user.uid}`).set({
      uid: user.uid,
      email: user.email,
      roles: { subscriber: true}, 
    }, 
    {merge: true});
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
