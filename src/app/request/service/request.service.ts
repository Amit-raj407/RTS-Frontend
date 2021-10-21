import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../model/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl = "";

  constructor(private http: HttpClient) { }

  // userAuth(user: User): Observable<any> {
  //   // this.http.post<any>(this.baseUrl+'login', user, {
  //   //   observe: 'response'
  //   // }).subscribe(resp=>{
  //   //   console.log(resp.headers.get('token'));
  //   // });
  //   console.log(user);
  //   return this.http.post<any>(this.baseUrl+'userauthentication', user, {
  //     observe: 'response'
  //   });
  // }

  saveRequest(request: Request): Observable<any> {
    console.log('At ReqService'+request);
    
    return this.http.post<any>(this.baseUrl+'', request, {
      observe: 'response'
    })
  }

  getAllRequests(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'');
  }


}
