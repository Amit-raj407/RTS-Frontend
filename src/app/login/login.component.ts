import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './models/User';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  user: User = new User;
  sub!: Subscription;

  data: any

  errorMessage: string = '';

  /*-----------------------------
    Reactive Forms Module
  -------------------------------*/

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });


  // -------------------------------

  constructor(private router: Router, private loginService: LoginService) { }


  onSubmit(): void {
    console.log("click");
    console.log(this.loginForm.value);

    this.user = {
      uName: this.loginForm.get('email')?.value,
      uPassword: this.loginForm.get('password')?.value
    }

    this.loginService.userAuth(this.user).subscribe({
      next: responseData => {
        this.data = responseData
        console.log(this.data.headers.get('bearertoken'));
        localStorage.setItem('token',this.data.headers.get('bearertoken'));
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.responseMessage;
        
      }

    });


  }

  ngOnInit(): void {
  }

}
