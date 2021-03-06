import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
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

    Swal.fire({
      title: 'Please Wait',
      allowEscapeKey: false,
      allowOutsideClick: true,
      background: '#fff',
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();

        this.loginService.userAuth(this.user).subscribe({
          next: responseData => {
            console.log(responseData);

            if (responseData) {
              Swal.fire({
                title: 'Logged In Successfully',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                this.data = responseData
                console.log(this.data.body.obj[0].uId);
                console.log(this.data.headers.get('authorization'));
                localStorage.setItem('token', this.data.headers.get('authorization'));
                localStorage.setItem('userrole', this.data.headers.get('userrole'));


                localStorage.setItem('userid', this.data.body.obj[0].uId);
                localStorage.setItem('username', this.data.body.obj[0].uFName);
                // console.log(this.data.body.obj.get('uId'));

                this.router.navigate(['/dashboard']);
              })
            }
          },
          error: err => {
            console.log(err);
            Swal.fire({
              text: err.error.message,
              icon: 'warning'
            })
          }
        })
      }
    })

    // this.loginService.userAuth(this.user).subscribe({
    //   next: responseData => {
    //     this.data = responseData
    //     console.log(this.data.body.obj[0].uId);
    //     console.log(this.data.headers.get('authorization'));
    //     localStorage.setItem('token', this.data.headers.get('authorization'));
    //     localStorage.setItem('userrole', this.data.headers.get('userrole'));


    //     localStorage.setItem('userid', this.data.body.obj[0].uId);
    //     localStorage.setItem('username', this.data.body.obj[0].uFName);
    //     // console.log(this.data.body.obj.get('uId'));

    //     this.router.navigate(['/dashboard']);
    //   },
    //   error: err => {
    //     console.log(err);
    //     this.errorMessage = err.error.message;
    //   }
    // });


  }

  ngOnInit(): void {
  }

}
