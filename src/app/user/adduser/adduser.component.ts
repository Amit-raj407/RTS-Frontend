import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent implements OnInit {
  constructor(private router: Router, private service: UserService) {}
  ngOnInit(): void {}
  createuser = new FormGroup({
    uName: new FormControl('', Validators.compose([Validators.required])),
    uFName: new FormControl('', Validators.compose([Validators.required])),
    uLName: new FormControl('', Validators.compose([Validators.required])),
    uEmail: new FormControl('', Validators.compose([Validators.required])),
    uPassword: new FormControl('', Validators.compose([Validators.required])),
    uIsActive: new FormControl('', Validators.compose([Validators.required])),
  });
  userdata = {
    uName: '',
    uFName: '',
    uLName: '',
    uEmail: '',
    uPassword: '',
    uIsActive: '',
  };

  errorMessage = {
    uName: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid Username.' },
    ],
    uFName: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid First Name.' },
    ],
    uLName: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid Last Name.' },
    ],
    uEmail: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' },
    ],
  };

  onSubmit() {
    console.warn(this.userdata);

    this.service.createuserservice(this.userdata).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );

    // this.loginService.generateToken(this.credentials).subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     this.loginService.loginUser(response.token);
    //     this.router.navigate(['/dashboard']);
    //     // window.location.href = '/dashboard';
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
  }
}
