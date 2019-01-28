import { AngularFirestore } from '@angular/fire/firestore';
import { NomatUser } from './../model/nomat-user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NomatUserService {

  userFormData: NomatUser;

  constructor(private firestore:AngularFirestore) { }

  getUsers(){
    return this.firestore.collection('users').snapshotChanges();
  }

  addUser(dataFormat){
    this.firestore.collection('users').add(dataFormat);
  }

  editUser(dataFormat,id){
    this.firestore.doc(`users/${id}`).set(dataFormat);
    }

  onDelete(id){
    this.firestore.doc(`users/${id}`).delete()
  }
}
