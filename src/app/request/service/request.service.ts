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

  saveRequest(request: any): Observable<any> {
    console.log('At ReqService' + request);

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };

    return this.http.post<any>(this.baseUrl + 'generaterequest', request, httpOptions);
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
    return this.http.get<any>(this.baseUrl + 'viewallrequest/allassignstatussususer', httpOptions);
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

    return this.http.get<any>(this.baseUrl + 'viewallrequest/allraisestatususer', httpOptions);
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
    return this.http.get<any>(this.baseUrl + 'viewallrequest/allarriseclosedstatususer', httpOptions);
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

    return this.http.get<any>(this.baseUrl + 'viewallrequest/allassignstatus', httpOptions);
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

    return this.http.get<any>(this.baseUrl + 'viewallrequest/allarrisestatus', httpOptions);
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

    return this.http.get<any>(this.baseUrl + 'viewallrequest/allarriseclosedstatus', httpOptions);
  }


  getRequestByReqCode(reqCode: string | null): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };

    return this.http.get<any>(`${this.baseUrl}getrequestbycode/${reqCode}`, httpOptions);
  }



  updateRequest(request: any): Observable<any> {
    console.log('At ReqService' + JSON.stringify(request));

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };

    return this.http.post<any>(this.baseUrl + 'updaterequest', JSON.stringify(request), httpOptions);
  }


  getAllDepartments(): Observable<any> {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };
    return this.http.get<any>(`${this.baseUrl}getalldepartmentcodelist`, httpOptions);
  }


  getAllUsersByDept(deptCode: string): Observable<any> {
    console.log(deptCode);

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };
    return this.http.get<any>(`${this.baseUrl}getuserbydeptcode/${deptCode}`, httpOptions);
  }


}
