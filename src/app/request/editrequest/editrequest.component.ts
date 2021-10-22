import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-editrequest',
  templateUrl: './editrequest.component.html',
  styleUrls: ['./editrequest.component.css']
})
export class EditrequestComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  
  requestForm = new FormGroup({
    reqid: new FormControl(''),
    reqtitle: new FormControl('', [
      Validators.required
    ]),
    reqcode: new FormControl(''),
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
    statusEntity: new FormGroup({
      sestdesc: new FormControl('')
    })
  });
  
  updateValuesInForm(): void {
    this.requestForm.setValue({
      reqtitle: '',
      reqdesc: '',
      severity1: '',
      piority1: '',
      reqdeptcode: '',
      reqassignto: '',
      reqinicomment: '',
    })
  }

  updateRequest(): void {
    console.log(this.requestForm.value);
    
    this.requestService.saveRequest(this.requestForm.value).subscribe({
      next: responseData => {
        console.log(responseData);  
      },
      error: err => {
        console.log(err);
        
      }
    })
  }

  ngOnInit(): void {
    // Get Entire Request Object By Id and call
    // the updateValuesInForm() method passing the object having the values

    // How to get Request Id in View Page as we are not storing the requestId anywhere

    // RequestCode is unique. We can use it to retrive data from backend
  }


}
