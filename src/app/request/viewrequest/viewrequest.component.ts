import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Request } from '../model/Request';
import { RequestService } from '../service/request.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.css']
})
export class ViewrequestComponent implements OnInit {

  requests: any[] = [];
  sub!: Subscription;

  userRole: string | null = '';

  loadedPage: Number = 1;



  constructor(private requestService: RequestService) { }


  assignedRequests(): void {
    this.loadedPage = 1;
    this.requests = [];
    Swal.fire({
      title: 'Please Wait',
      allowEscapeKey: false,
      allowOutsideClick: true,
      background: '#fff',
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        this.sub = this.requestService.getAllRequestsForUser().subscribe({
          next: responseData => {
            this.requests = responseData.obj[0]
            console.log(this.requests);
            Swal.close();
          },
          error: err => {
            console.log(err);
            Swal.fire({
              text: 'Error in Fetching Data',
              icon: 'warning'
            })
          }
        })
      }
    })

  }


  raisedRequests(): void {
    this.loadedPage = 2;
    this.requests = [];
    Swal.fire({
      title: 'Please Wait',
      allowEscapeKey: false,
      allowOutsideClick: true,
      background: '#fff',
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        this.sub = this.requestService.getAllRequestsAssignedByUser().subscribe({
          next: responseData => {
            this.requests = responseData.obj[0]
            console.log(this.requests);
            Swal.close();
          },
          error: err => {
            console.log(err);
            Swal.fire({
              text: 'Error in Fetching Data',
              icon: 'warning'
            })
          }
        })
      }
    })
  }


  closedRequests(): void {
    this.loadedPage = 3;
    this.requests = [];
    Swal.fire({
      title: 'Please Wait',
      allowEscapeKey: false,
      allowOutsideClick: true,
      background: '#fff',
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        this.sub = this.requestService.getAllClosedRequests().subscribe({
          next: responseData => {
            this.requests = responseData.obj[0]
            console.log(this.requests);
            Swal.close();
          },
          error: err => {
            console.log(err);
            Swal.fire({
              text: 'Error in Fetching Data',
              icon: 'warning'
            })
          }
        })
      }
    })
  }


  assignedRequestsAdminView(): void {
    this.loadedPage = 4;
    this.requests = [];
    Swal.fire({
      title: 'Please Wait',
      allowEscapeKey: false,
      allowOutsideClick: true,
      background: '#fff',
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        this.sub = this.requestService.getAllRequestsForAdmin().subscribe({
          next: responseData => {
            this.requests = responseData.obj[0]
            console.log(this.requests);
            Swal.close();
          },
          error: err => {
            console.log(err);
            Swal.fire({
              text: 'Error in Fetching Data',
              icon: 'warning'
            })
          }
        })
      }
    })

  }


  raisedRequestsAdminView(): void {
    this.loadedPage = 5;;
    this.requests = [];
    Swal.fire({
      title: 'Please Wait',
      allowEscapeKey: false,
      allowOutsideClick: true,
      background: '#fff',
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        this.sub = this.requestService.getAllRequestsAssignedByAdmin().subscribe({
          next: responseData => {
            this.requests = responseData.obj[0]
            console.log(this.requests);
            Swal.close();
          },
          error: err => {
            console.log(err);
            Swal.fire({
              text: 'Error in Fetching Data',
              icon: 'warning'
            })
          }
        })
      }
    })
  }
  closedRequestsAdminView(): void {
    this.loadedPage = 6;
    this.requests = [];
    Swal.fire({
      title: 'Please Wait',
      allowEscapeKey: false,
      allowOutsideClick: true,
      background: '#fff',
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        this.sub = this.requestService.getAllClosedRequestsAdmin().subscribe({
          next: responseData => {
            this.requests = responseData.obj[0]
            console.log(this.requests);
            Swal.close();
          },
          error: err => {
            console.log(err);
            Swal.fire({
              text: 'Error in Fetching Data',
              icon: 'warning'
            })
          }
        })
      }
    })
  }



  ngOnInit(): void {
    this.userRole = localStorage.getItem('userrole');
    this.assignedRequests();
  }

}
