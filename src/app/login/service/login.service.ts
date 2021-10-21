import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private baseUrl = '';

  constructor(private http: HttpClient) { }

  userAuth(user: User): Observable<any> {
    // this.http.post<any>(this.baseUrl+'login', user, {
    //   observe: 'response'
    // }).subscribe(resp=>{
    //   console.log(resp.headers.get('token'));
    // });
    console.log(user);
    return this.http.post<any>(this.baseUrl+'login', user, {
      observe: 'response'
    });
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
