import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-editdept',
  templateUrl: './editdept.component.html',
  styleUrls: ['./editdept.component.css'],
})
export class EditdeptComponent implements OnInit {
  createDepartmentData = new FormGroup({
    decode: new FormControl('', Validators.compose([Validators.required])),
    dename: new FormControl('', Validators.compose([Validators.required])),
    depcode: new FormControl(
      { value: '' },
      Validators.compose([Validators.required])
    ),
    deisactive: new FormControl('', Validators.compose([Validators.required])),
  });

  updateValuesInForm(reqValues: any): void {
    this.createDepartmentData.patchValue({
      decode: reqValues.decode,
      dename: reqValues.dename,
      depcode: reqValues.depcode,
      deisactive: reqValues.deisactive,
    });
  }

  deptCodeList: any[] = [];
  decode: string | null = '';

  constructor(
    private deptservice: DepartmentService,
    private _activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this._activatedRouter.paramMap.subscribe(
      (param) => (this.decode = param.get('decode')));

    this.deptservice.getDeptByDeptCode(this.decode).subscribe({
      next: (responseData) => {this.updateValuesInForm(responseData.obj[0]);},
      error: (err) => {console.log(err);},
    });


    this.deptservice.getAllDepartments().subscribe({
      next: (responseData) => {
        console.log(responseData.obj[0]);
        this.deptCodeList = responseData.obj[0];
      },
      error: (err) => {
        console.log(err);
      },
    });






  }
}
