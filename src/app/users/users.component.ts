import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NotificationService } from '../shared/notification.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  // userForm: FormGroup;

  constructor(public userService: UserService, 
    private notification:NotificationService, 
    public dialogref:MatDialogRef<UsersComponent>,
    ) { }


  ngOnInit() {

  }

  onSubmit() {
    if (this.userService.userForm.valid){
      let user = this.userService.userForm.value
      console.log(user);
      this.userService.updateUserData(user);
      this.onClear();  // to clear and reset the form
      this.notification.success('Submitted Successfull')
      // this.userService.userForm.reset();
      // this.userService.initializeFormGroup();
      this.dialogref.close();
    }
    
  }

  onClear(){
    this.userService.userForm.reset();
    this.userService.initializeFormGroup();

  }


}

