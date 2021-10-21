import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.css']
})
export class AddrequestComponent implements OnInit {

  constructor() { }


  requestForm = new FormGroup({
    reqTitle: new FormControl('', [
      Validators.required
    ]),
    reqDesc: new FormControl('', [
      Validators.required
    ]),
    assignedDept: new FormControl('', [
      Validators.required
    ]),
    assignedUser: new FormControl('', [
      Validators.required
    ]),
    severity: new FormControl('', [
      Validators.required
    ]),
    priority: new FormControl('', [
      Validators.required
    ]),
    
    status: new FormControl('Initial Status', [
      Validators.required
    ]),
    initialComments: new FormControl('', [
      Validators.required
    ]),
  });

  onRequestFormSubmit() {
    console.log(this.requestForm.value);
    
  }

  ngOnInit(): void {
  }

}
