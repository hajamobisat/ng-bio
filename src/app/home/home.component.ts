import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import * as jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: any[];
  newList: any [];
 
  listData: MatTableDataSource<any>;
  searchKey: string;
 

  // displayColumns: string[] = ['id','userid','checktime','serialno'];
  displayColumns: string[] = ['userid','checkdate','checkintime', 'checkouttime','serialno'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild('pdfData') pdfData: ElementRef;

  constructor(private http:Http) {
    // http.get('https://jsonplaceholder.typicode.com/posts')
    // http.get('http://localhost:3000/')
    http.get('https://node-bio.firebaseapp.com/ta')
    
    .subscribe(response =>{
      this.list = response.json();
      this.newList = response.json();
      this.listData = new MatTableDataSource(response.json());
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
   }

  ngOnInit() {
  }

  searchClear(){
    this.searchKey="";
    this.applyFilter();
  }




  applyFilter(){
//Filter for excel output
    this.newList = this.list.filter(result => {
      return result.userid==this.searchKey; 
    })
 
    //Filter for screen output
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  downloadPDF(){
    let doc= new jsPDF;
    let specialElementHandlers = {
      '#element' : function(element, renderer){
        return true;
      }
    };
    let content = this.pdfData.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width' : 190,
      'elementHandlers' : specialElementHandlers
    });
    doc.save('test.pdf');
  }

  downloadExcel(){
    
    const workBook = XLSX.utils.book_new(); // create a new blank book
    const workSheet = XLSX.utils.json_to_sheet(this.newList); // create a new sheet with json of newList

    XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
    XLSX.writeFile(workBook, 'temp.xlsx'); // initiate a file download in browser
 }



  }

