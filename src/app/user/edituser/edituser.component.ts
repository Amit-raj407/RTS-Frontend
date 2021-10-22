import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private _activatedRouter:ActivatedRoute,private router: Router, private service: UserService) { }

  username: string | null = '';

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe(param => this.username = (param.get('username')))
    this.service.getUserByUsername(this.username).subscribe(
      {
        next: responseData => {
          console.log(responseData.obj[0]);
        },
        error: err => {
          console.log(err);
        }
      }
      )
  }
}
