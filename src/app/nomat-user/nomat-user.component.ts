import { NomatUser } from './../model/nomat-user.model';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { NomatUserService } from './../shared/nomat-user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-nomat-user',
  templateUrl: './nomat-user.component.html',
  styleUrls: ['./nomat-user.component.css']
})
export class NomatUserComponent implements OnInit {

  list: NomatUser[];
  


  constructor(public nomatUserService: NomatUserService, private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resettingForm();

    this.nomatUserService.getUsers().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          ...item.payload.doc.data(),
          id: item.payload.doc.id,
        } as NomatUser
      })
    });

  }

  resettingForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.nomatUserService.userFormData = {
      id: null,
      email: '',
      isActive: false,
      roles: {isUser: false, isAdmin: false}
    };
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;

    let dataFormat = {
      email: data.email,
      isActive: data.isActive,
      roles:
       { isUser:  data.isUser, isAdmin: data.isAdmin  },
    };

    if (!form.value.id)
      // this.nomatUserService.addUser(dataFormat);
      this.nomatUserService.editUser(dataFormat, form.value.email);

    else
      this.nomatUserService.editUser(dataFormat, form.value.email);


    this.resettingForm(form);
    this.toastr.success('Saved', 'User Register');
  }

  onSelect(user) {
    this.nomatUserService.userFormData = Object.assign({}, user);
  }

  onDelete(id){
    this.resettingForm();
    this.nomatUserService.onDelete(id);

  }

  onClear(){
    this.resettingForm();
  }

 

}
