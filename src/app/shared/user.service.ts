import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AppUser, Roles } from './../model/app-user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class UserService {



  firestoreUser$: Observable<AppUser>;



  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.firestoreUser$ = this.authService.user$
      .pipe(switchMap(user => {
        if (user) {
          return this.afs.doc<AppUser>(`users/${user.email}`).valueChanges();
        } else {
          return EMPTY;
        }
      }));
  }

  // user form initialize.
  userForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    email: new FormControl('', [Validators.required, Validators.email]),
    isActive: new FormControl(false),
    roles: new FormGroup({
      isUser: new FormControl(false),
      isAdmin: new FormControl(false)
    })
  });

  initializeFormGroup() {
    this.userForm.setValue({
      $key: null,
      email: '',
      isActive: false,
      roles: ({
        isUser: false,
        isAdmin: false
      })
    })
  }

  getUsers() {
    return this.afs.collection('users').snapshotChanges();

  }

  updateUserData(user) {
    if (user.$key ){
      this.afs.doc(`users/${user.$key}`).set({
      email: user.email,
      isActive: user.isActive,
      roles:
        { isUser: user.roles.isUser, isAdmin: user.roles.isAdmin },
    },
      { merge: true });
    } else {
      this.afs.collection('users').add(user);
    }
    
  }


}




