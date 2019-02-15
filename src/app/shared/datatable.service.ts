import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor(private http:Http) { 
   
  }

  getAllData(){
    return this.http.get('http://localhost:3000/ta');
    // return this.http.get('https://node-bio.firebaseapp.com/ta');
  }

  getAllLocations(){
    return this.http.get('http://localhost:3000/my_terminal_location');
  }
}
