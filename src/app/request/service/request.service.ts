import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../model/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl = "http://localhost:9091/home/";

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

  getAllRequestsForUser(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };
    return this.http.get<any>(this.baseUrl+'viewallrequest/allassignstatussususer',httpOptions);
  }





  getAllRequestsAssignedByUser(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };

    return this.http.get<any>(this.baseUrl+'viewallrequest/allraisestatususer',httpOptions);
  }

  getAllClosedRequests(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };
    return this.http.get<any>(this.baseUrl+'viewallrequest/allarriseclosedstatususer',httpOptions);
  }

  getAllRequestsForAdmin(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };

    return this.http.get<any>(this.baseUrl+'viewallrequest/allassignstatus',httpOptions);
  }


  getAllRequestsAssignedByAdmin(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };

    return this.http.get<any>(this.baseUrl+'viewallrequest/allarrisestatus',httpOptions);
  }
  getAllClosedRequestsAdmin(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };

    return this.http.get<any>(this.baseUrl+'viewallrequest/allarriseclosedstatus',httpOptions);
  }



}
