import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css'],
})
export class ViewuserComponent implements OnInit {
  userList: any[] = [];
  sub!: Subscription;



  constructor(private router: Router, private service: UserService) {}

  ngOnInit(): void {
    this.sub = this.service.getalluser().subscribe({
      next: responseData => {
        console.log(responseData.obj[0]);
        this.userList = responseData.obj[0];

      }
    })
  }
}
