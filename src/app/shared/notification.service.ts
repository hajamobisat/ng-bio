import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarModule} from '@angular/material'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  snackBarConf : MatSnackBarConfig = {
    duration : 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  }

  success(msg){
    this.snackBarConf.panelClass = 'success';
    this.snackBar.open(msg,'', this.snackBarConf);
  }
}
