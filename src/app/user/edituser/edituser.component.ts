import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {
  FormGroup,
  FormControl,
  FormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  constructor(
    private _activatedRouter: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  username: string | null = '';

  userForm = new FormGroup({
    uName: new FormControl('', Validators.compose([Validators.required])),
    uFName: new FormControl('', Validators.compose([Validators.required])),
    uLName: new FormControl('', Validators.compose([Validators.required])),
    uEmail: new FormControl('', Validators.compose([Validators.required])),
    uPassword: new FormControl('', Validators.compose([Validators.required])),
    uIsActive: new FormControl('', Validators.compose([Validators.required])),
  });

  updateValuesInForm(reqValues: any): void {
    this.userForm.patchValue({
      uName: reqValues.uName,
      uFName: reqValues.uFName,
      uLName: reqValues.uLName,
      uEmail: reqValues.uEmail,
      uPassword: reqValues.uPassword,
      uIsActive: reqValues.uIsActive,
    });
  }

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe(
      (param) => (this.username = param.get('username'))
    );
    this.service.getUserByUsername(this.username).subscribe({
      next: (responseData) => {
        console.log(responseData.obj[0]);
        this.updateValuesInForm(responseData.obj[0]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  userUpdateSubmit() {
    console.warn(this.userForm.value);

    this.service.updateUser(this.userForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/dashboard/user/']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
