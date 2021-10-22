import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-editrequest',
  templateUrl: './editrequest.component.html',
  styleUrls: ['./editrequest.component.css']
})
export class EditrequestComponent implements OnInit {

  constructor(
      private requestService: RequestService, 
      private _activatedRouter: ActivatedRoute,
      private fb: FormBuilder
    ) { }


  reqcode: string | null = '';

    // requestForm = this.fb.group({
    //   reqid: [''],
    //   reqtitle: ['', Validators.required],
    //   reqcode: ['', Validators.required],
    //   reqdesc: ['', Validators.required],
    //   severity: ['', Validators.required],
    //   piority: ['', Validators.required],
    //   reqdeptcode: ['', Validators.required],
    //   reqassignto: ['', Validators.required],
    //   reqinicomment: ['', Validators.required],
    //   trStatus: ['']
    // })

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
    trStatus: new FormControl('', Validators.required),
    // statusEntity: new FormArray([
    //   new FormGroup({
        
    //   })
    // ])

  });

  updateValuesInForm(reqValues: any): void {

    this.requestForm.patchValue({
      reqid: reqValues.reqid,
      reqtitle: reqValues.reqtitle,
      reqdesc: reqValues.reqdesc,
      reqcode: reqValues.reqcode,
      severity: reqValues.severity,
      piority: reqValues.piority,
      reqdeptcode: reqValues.reqdeptcode,
      reqassignto: reqValues.reqassignto,
      reqinicomment: reqValues.reqinicomment,
      // trStatus: req
    });

    let statusLength = reqValues.statusEntity.length;
    // this.requestForm.patchValue({

    // })

  }

  updateRequest(): void {
    console.log(this.requestForm.value);

    this.requestService.updateRequest(this.requestForm.value).subscribe({
      next: responseData => {
        console.log(responseData);
      },
      error: err => {
        console.log(err);

      }
    })
  }

  ngOnInit(): void {


    this._activatedRouter.paramMap.subscribe(param => this.reqcode = (param.get('reqcode')));
    this.requestService.getRequestByReqCode(this.reqcode).subscribe({
      next: responseData => {
        console.log(responseData.obj[0]);
        this.updateValuesInForm(responseData.obj[0]);
      },
      error: err => {
        console.log(err);

      }
    })
    // Get Entire Request Object By Id and call
    // the updateValuesInForm() method passing the object having the values

    // How to get Request Id in View Page as we are not storing the requestId anywhere

    // RequestCode is unique. We can use it to retrive data from backend
  }


}
