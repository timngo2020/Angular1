import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  slots = [
    {'time': '9am-10am', 'color': 'LightGray', 'name': '', 'phone': ''},
    {'time': '10am-11am', 'color': 'LightGray', 'name': '', 'phone': ''},
    {'time': '11am-12pm', 'color': 'LightGray', 'name': '', 'phone': ''},
    {'time': '12pm-1pm', 'color': 'LightGray', 'name': '', 'phone': ''},
    {'time': '1pm-2m', 'color': 'LightGray', 'name': '', 'phone': ''},
    {'time': '2pm-3pm', 'color': 'LightGray', 'name': '', 'phone': ''},
    {'time': '3pm-4pm', 'color': 'LightGray', 'name': '', 'phone': ''},
    {'time': '4pm-5pm', 'color': 'LightGray', 'name': '', 'phone': ''}
  ];

  urlGet = 'http://localhost:3000/getSched';
  urlUpdate = 'http://localhost:3000/updateSched';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getSched(): Observable<Object> {
    return this.http.get<Object>(this.urlGet, this.httpOptions);
                  //  .map<Object>(res => res.json());
  }

  updateSched(): Observable<Object> {
    return this.http.put<Object>(this.urlUpdate, JSON.stringify(this.slots), this.httpOptions);
                  //  .map<Object>(res => res.json());
  }
}
