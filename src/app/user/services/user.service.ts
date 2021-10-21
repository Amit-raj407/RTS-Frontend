import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:9091/home';

  constructor(private http: HttpClient) {}

  createuserservice(userdata: any):Observable<any> {
    return this.http.post(`${this.baseUrl}/createuser`, userdata);
  }


}
