import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Request } from '../model/Request';
import { statusEntity } from '../model/statusEntity';
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
    private fb: FormBuilder,
    private router: Router
  ) { }


  reqcode: string | null = '';

  request!: Request;

  statusEntity: statusEntity[] = [];
  status!: statusEntity;

  deptList: any[] = [];
  userList: any[] = [];

  commentHistoryList: any[] = [];

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
    let statusEntityLength = reqValues.statusEntity.length;
    let commentHistoryLength = reqValues.cCommentsEntity.length;

    // console.log(reqValues.statusEntity[]);


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
      //reqinicomment: reqValues.cCommentsEntity[commentHistoryLength-1].cmdesc,
      trStatus: reqValues.statusEntity[statusEntityLength-1].sestdesc
    });

    this.buildUserDropDown(reqValues.reqdeptcode);

    let statusLength = reqValues.statusEntity.length;
    // this.requestForm.patchValue({

    // })

  }

  updateRequest(): void {
    console.log(this.requestForm.value);

    this.status = {
      sestdesc: this.requestForm.get('trStatus')?.value
    }

    this.statusEntity.push(this.status);

    this.request = {
      reqid: this.requestForm.get('reqid')?.value,
      reqdeptcode: this.requestForm.get('reqdeptcode')?.value,
      reqcode:  this.requestForm.get('reqcode')?.value,
      reqtitle:  this.requestForm.get('reqtitle')?.value,
      reqdesc:  this.requestForm.get('reqdesc')?.value,
      reqassignto:  this.requestForm.get('reqassignto')?.value,


      reqinicomment:  this.requestForm.get('reqinicomment')?.value,

      severity:  this.requestForm.get('severity')?.value,
      piority:  this.requestForm.get('piority')?.value,

      statusEntity: this.statusEntity
    }

    console.log(JSON.stringify(this.request));

    Swal.fire({
      title: 'Please Wait',
      allowEscapeKey: false,
      allowOutsideClick: true,
      background: '#fff',
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();

        this.requestService.updateRequest(this.request).subscribe({
          next: responseData => {
            console.log(responseData);

            if (responseData) {
              Swal.fire({
                title: 'Request Updated',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                this.buildCommentHistory();
              })
            }
          },
          error: err => {
            console.log(err);
            Swal.fire({
              text: 'Error in Updating Request',
              icon: 'warning'
            })
          }
        })
      }
    })

    // this.requestService.updateRequest(this.request).subscribe({
    //   next: responseData => {
    //     console.log(responseData);
    //     this.buildCommentHistory();
    //   },
    //   error: err => {
    //     console.log(err);

    //   }
    // })
  
  }


  buildUserDropDown(deptCode: string): void {
    this.requestService.getAllUsersByDept(deptCode).subscribe({
      next: responseData => {
        console.log(responseData.obj[0]);
        this.userList = responseData.obj[0];
      },
      error: err => {
        console.log(err);

      }
    })
  }

  buildDeptDropDown(): void {
    this.requestService.getAllDepartments().subscribe({
      next: responseData => {
        console.log(responseData.obj[0]);
        this.deptList = responseData.obj[0];
      },
      error: err => {
        console.log(err);
      }
    });
  }

  buildCommentHistory(): void {
    this.requestService.getRequestCommentHistory(this.reqcode).subscribe({
      next: responseData => {
        console.log(responseData.obj);
        this.commentHistoryList = responseData.obj;
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
    });
    this.buildCommentHistory();

    this.buildDeptDropDown();
    // Get Entire Request Object By Id and call
    // the updateValuesInForm() method passing the object having the values

    // How to get Request Id in View Page as we are not storing the requestId anywhere

    // RequestCode is unique. We can use it to retrive data from backend
  }


}
