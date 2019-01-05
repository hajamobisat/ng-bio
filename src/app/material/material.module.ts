import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatIconModule,
    Material.MatCardModule,
    Material.MatMenuModule,
    Material.MatButtonModule,
    Material.MatInputModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatGridListModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatDialogModule

  ],

  exports:[
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatIconModule,
    Material.MatCardModule,
    Material.MatMenuModule,
    Material.MatButtonModule,
    Material.MatInputModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatGridListModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatDialogModule
  ],

  declarations: []
})
export class MaterialModule { }
