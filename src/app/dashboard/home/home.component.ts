import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }



  userRole: string | null = '';



  noOfAssignedRequestInDepartment: Number = 0;
  noOfDepartment: Number = 0;
  noOfRaisedRequestInDepartment: Number = 0;
  noOfUserInDepartment: Number = 0;

  ngOnInit(): void {

    this.userRole = localStorage.getItem('userrole');


    this.homeService.getStatistics().subscribe({
      next: responseData => {
        console.log(responseData.obj[0]);

        this.noOfAssignedRequestInDepartment = responseData.obj[0].noOfAssignedRequestInDepartment

        this.noOfDepartment = responseData.obj[0].noOfDepartment

        this.noOfRaisedRequestInDepartment = responseData.obj[0].noOfRaisedRequestInDepartment
        this.noOfUserInDepartment = responseData.obj[0].noOfUserInDepartment

      },
      error: err => {
        console.log(err);

      }
    })
  }

}
