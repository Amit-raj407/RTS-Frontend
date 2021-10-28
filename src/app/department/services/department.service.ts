import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl = 'http://localhost:9091/home/';

  constructor(private http: HttpClient) {}

  createDepartmentService(createDepartmentData: any): Observable<any> {
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
    return this.http.post(`${this.baseUrl}createdept`, createDepartmentData, httpOptions);
  }


  getAllDepartments() {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('token'),
      userid: '' + localStorage.getItem('userid'),
      userrole: '' + localStorage.getItem('userrole'),
    });
    const httpOptions = {
      headers: httpHeaders,
    };
    return this.http.get<any>(`${this.baseUrl}selectdepartment`,httpOptions);
  }

  // getDeptForAdmin(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     authorization: 'Bearer ' + localStorage.getItem('token'),
  //     userid: '' + localStorage.getItem('userid'),
  //     userrole: '' + localStorage.getItem('userrole'),
  //   });
  //   const httpOptions = {
  //     headers: httpHeaders,
  //   };
  //   return this.http.get<any>(`${this.baseUrl}getdeptforadmin`,httpOptions);
  // }


}
