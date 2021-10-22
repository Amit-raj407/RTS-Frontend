import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:9091/home/';

  constructor(private http: HttpClient) {}

  createuserservice(userdata: any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };
    return this.http.post(`${this.baseUrl}createuser`, userdata, httpOptions);
  }

  getalluser() {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };
    return this.http.get<any>(
      `${this.baseUrl}getalluser`,
      httpOptions
    );
  }

  getUserByUsername(username:string | null)
  {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };
    return this.http.get<any>(
      `${this.baseUrl}getuser/${username}`,httpOptions);
  }

  updateUser(userUpdateData: any): Observable<any>
  {
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };
    return this.http.post(`${this.baseUrl}updateusers`, userUpdateData, httpOptions);

  }



}
