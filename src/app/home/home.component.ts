import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { DatatableService } from '../shared/datatable.service';
import * as jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: any[];
  newList: any[];

  listData: MatTableDataSource<any>;
  searchKey: string;

  displayColumns: string[] = ['userid', 'name', 'checkdate', 'checkintime', 'checkouttime', 'location', 'serialno'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('pdfData') pdfData: ElementRef;

  // toppings = new FormControl();
  toppings;

  toppingList: any[];
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private datatableservice: DatatableService, private router: Router) {
    this.datatableservice.getAllData()
      .subscribe(response => {
        this.list = this.newList = response.json();
        // this.newList = response.json();
        this.listData = new MatTableDataSource(response.json());
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

  ngOnInit() {
    this.datatableservice.getAllLocations().subscribe(response => {
      this.toppingList = response.json()
    });
  }

  onLocationChange(event) {
    if (event.toString() === 'all') {
      this.toppings = 'all';
      this.searchClear();
    }
    else {
      this.searchKey = event.toString();
      // this.searchKey = this.toppings.toString();
      this.applyFilter();
    }
  }

  searchClear() {
    this.searchKey = "";
    this.applyFilter();
  }




  applyFilter() {
    
    //Filter for screen output
     this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  downloadPDF() {
    let doc = new jsPDF;
    let specialElementHandlers = {
      '#element': function (element, renderer) {
        return true;
      }
    };
    let content = this.pdfData.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('test.pdf');
  }

  downloadExcel() {

    //Filter for excel output
    if (this.searchKey){
      this.newList = this.list.filter(result => {
        return result.userid.trim().toLowerCase().includes(this.searchKey.trim().toLowerCase()) ||
                result.name.trim().toLowerCase().includes(this.searchKey.trim().toLowerCase()) ||
                result.serialno.trim().toLowerCase().includes(this.searchKey.trim().toLowerCase());
       
      })
    }

    const workBook = XLSX.utils.book_new(); // create a new blank book
    const workSheet = XLSX.utils.json_to_sheet(this.newList); // create a new sheet with json of newList

    XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
    XLSX.writeFile(workBook, 'temp.xlsx'); // initiate a file download in browser

    // reset newList
    this.newList=this.list;
  }

  isPrinting = false;

  printDoc() {
    this.isPrinting = true;
    this.router.navigate(['/',
      { outlets: {
        'print': ['print', 'documentName', 'documentData']
      }}]);
     
  }
 
}

