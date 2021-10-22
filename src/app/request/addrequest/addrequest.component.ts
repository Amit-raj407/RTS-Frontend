import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Request } from '../model/Request';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.css']
})
export class AddrequestComponent implements OnInit {

  constructor(private router: Router, private requestService: RequestService) { }

  sub!: Subscription;

  request: Request = new Request;

  deptList: string[] = [];

  requestForm = new FormGroup({
    reqtitle: new FormControl('', [
      Validators.required
    ]),
    reqdesc: new FormControl('', [
      Validators.required
    ]),
    severity: new FormControl('', [
      Validators.required
    ]),
    piority: new FormControl('', [
      Validators.required
    ]),
    reqdeptcode: new FormControl('', [
      Validators.required
    ]),
    reqassignto: new FormControl('', [
      Validators.required
    ]),
    reqinicomment: new FormControl('', [
      Validators.required
    ]),

  });

  onRequestFormSubmit() {
    console.log(this.requestForm.value);
    // this.request = {
    //   reqdeptcode: this.requestForm.get('assignedDept')?.value,
    //   reqcode: '',
    //   reqtitle: this.requestForm.get('reqTitle')?.value,
    //   reqdesc: this.requestForm.get('reqDesc')?.value,
    //   reqassignto: this.requestForm.get('assignedUser')?.value,
    //   // reqassigndate: new Date,
    //   reqinicomment: this.requestForm.get('initialComments')?.value,
    //   severity: this.requestForm.get('severity')?.value,
    //   piority: this.requestForm.get('priority')?.value,
    //   recreatedby: 1
    // }

    this.sub = this.requestService.saveRequest(this.requestForm.value).subscribe({
      next: responseData => {
        console.log(responseData);
        this.router.navigate(['../dashboard/request']);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.requestService.getAllDepartments().subscribe({
      next: responseData => {
        console.log(responseData);
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
