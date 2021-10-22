import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  private baseUrl = 'http://localhost:9091/home/';
  constructor(private http: HttpClient) { }


  getStatistics(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };
    return this.http.get<any>(`${this.baseUrl}dashboarddata`, httpOptions);
  }
}
