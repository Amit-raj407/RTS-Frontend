import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:9091/home';

  constructor(private http: HttpClient) {}

  createuserservice(userdata: any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };

    return this.http.post(`${this.baseUrl}/createuser`, userdata,httpOptions);
  }
}
