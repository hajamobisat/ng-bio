import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ta-print',
  templateUrl: './ta-print.component.html',
  styleUrls: ['./ta-print.component.css']
})
export class TaPrintComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    window.print();
    this.router.navigate([{ outlets: { print: null }}]);
  }

}
