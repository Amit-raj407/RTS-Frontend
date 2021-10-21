import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  requestsRaised: Number = 0;
  requestsAssigned: Number = 0;
  requestsPending: Number = 0;
  requestsCompleted: Number = 0;

  ngOnInit(): void {
  }

}
