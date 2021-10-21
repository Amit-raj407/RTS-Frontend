import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Request } from '../model/Request';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.css']
})
export class ViewrequestComponent implements OnInit {

  requests: any[] = [];
  sub!: Subscription;

  userRole: string | null = '';



  constructor(private requestService: RequestService) { }


  assignedRequests(): void {
    this.requests = [];
    this.sub = this.requestService.getAllRequestsForUser().subscribe({
      next: responseData => {
        this.requests = responseData.obj[0]
        console.log(this.requests);
      },
      error: err => {
        console.log(err);
      }
    })
  }


  raisedRequests(): void {
    this.requests = [];
    this.sub = this.requestService.getAllRequestsAssignedByUser().subscribe({
      next: responseData => {
        this.requests = responseData.obj[0]
        console.log(this.requests);
      },
      error: err => {
        console.log(err);
      }
    })
  }


  closedRequests(): void {
    this.requests = [];
    this.sub = this.requestService.getAllClosedRequests().subscribe({
      next: responseData => {
        this.requests = responseData.obj[0]
        console.log(this.requests);
      },
      error: err => {
        console.log(err);
      }
    })
  }


  assignedRequestsAdminView(): void {
    this.requests = [];
    this.sub = this.requestService.getAllRequestsForAdmin().subscribe({
      next: responseData => {
        this.requests = responseData.obj[0]
        console.log(this.requests);
      },
      error: err => {
        console.log(err);
      }
    })
  }


  raisedRequestsAdminView(): void {
    this.requests = [];
    this.sub = this.requestService.getAllRequestsAssignedByAdmin().subscribe({
      next: responseData => {
        this.requests = responseData.obj[0]
        console.log(this.requests);
      },
      error: err => {
        console.log(err);
      }
    })
  }
  closedRequestsAdminView(): void {
    this.requests = [];
    this.sub = this.requestService.getAllClosedRequestsAdmin().subscribe({
      next: responseData => {
        this.requests = responseData.obj[0]
        console.log(this.requests);
      },
      error: err => {
        console.log(err);
      }
    })
  }



  ngOnInit(): void {
    this.userRole = localStorage.getItem('userrole');
    this.assignedRequests();
  }

}
