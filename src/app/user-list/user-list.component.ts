import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppUser } from './../model/app-user';
import { UserService } from './../shared/user.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from "@angular/material";
import { UsersComponent } from '../users/users.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  // list: AppUser[];
  tableDataSource: MatTableDataSource<any>;
  searchKey: string;


  displayedColumns: string[] = [ 'email', 'isActive', 'adminRole', 'userRole', 'actions'];
  // displayedColumns: string[] = ['email', 'isActive', 'adminRole', 'userRole', 'actions'];
  // displayedColumns: string[] = ['email', 'actions'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService, private afs: AngularFirestore, private dialog: MatDialog) {
    this.userService.getUsers()
      .subscribe(actionArray => {
        let list = actionArray.map(item => {
          return {
            $key: item.payload.doc.id,
            ...item.payload.doc.data() as AppUser
          }
        });
        this.tableDataSource = new MatTableDataSource(list);
        this.tableDataSource.sort = this.sort;
        this.tableDataSource.paginator = this.paginator;
      });
  }

  onSearchClear() {
    this.searchKey = ""
    this.onApplyFilter();
  }

  onApplyFilter() {
    this.tableDataSource.filter = this.searchKey.trim().toLowerCase();
  }


  onCreateUser() {
    this.userService.initializeFormGroup();
    this.callDialog();

  }

  onEdit(row) {
    console.log(row);
    this.userService.userForm.setValue(row);
    this.callDialog();

  }

  callDialog() {
    const dialogConf = new MatDialogConfig();
    dialogConf.disableClose = false;
    dialogConf.autoFocus = true;
    dialogConf.width = "60%";
    this.dialog.open(UsersComponent, dialogConf);
  }


  ngOnInit() {
  }



}
