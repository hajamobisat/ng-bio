import { AngularFireAuth } from '@angular/fire/auth';
import { AppUser } from './../model/app-user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  firestoreUser$: Observable<AppUser>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { 
    this.firestoreUser$ = this.afAuth.authState
    .pipe(switchMap(user =>{
      if (user){
        return this.afs.doc<AppUser>(`users/${user.uid}`).valueChanges();
      } else {
        // return Observable.of(null);
        return EMPTY; 
      }
    }));
    }
}


  

