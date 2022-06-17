import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs'; 
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const APIKEY = environment.apiKey; 
const BASEURL = environment.baseUrl; 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

      getApi(selectedValue:string): Observable<Object> {
      return this.http.get(`${BASEURL+selectedValue},CA&key=${APIKEY}`)
     }
}
