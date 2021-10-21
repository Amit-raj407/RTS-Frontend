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

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.sub = this.requestService.getAllRequests().subscribe({
      next: responseData => {
        this.requests = responseData
        console.log(this.requests);
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
