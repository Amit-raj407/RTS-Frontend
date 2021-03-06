import { Component, OnInit } from '@angular/core';
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
  selector: 'app-adddept',
  templateUrl: './adddept.component.html',
  styleUrls: ['./adddept.component.css'],
})
export class AdddeptComponent implements OnInit {
  constructor(private router: Router, private service: DepartmentService) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('userrole');
    this.service.getAllDepartments().subscribe({
      next: (responseData) => {
        console.log(responseData.obj[0]);
        this.deptCodeList = responseData.obj[0];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  step: number = 1;

  deptCodeList: any[] = [];

  role: string | null = '';

  flag: boolean = false;

  parentDeptForm = new FormGroup({
    depcode: new FormControl('', Validators.required),
  });

  submitParentForm() {
    this.step = 2;
    this.createDepartmentData.patchValue({
      depcode: this.parentDeptForm.get('depcode')?.value,
    });

    // -------------------
    // this.createDepartmentData.patchValue({
    //   depcode: this.parentDeptForm.get('depcode')?.value,
    // });
    // -------------------
    // this.createDepartmentData.patchValue({
    //   decode: this.parentDeptForm.get('depcode')?.value,
    //   depcode: this.parentDeptForm.get('depcode')?.value,
    // });
    // this.createDepartmentData.get('decode')?.disabled;
    // -----------------------------------------------------

    this.deptCodeList.forEach((dept) => {
      if (dept.decode == this.parentDeptForm.get('depcode')?.value) {
        console.log('Match');
        console.log(dept.decode);
        console.log(this.parentDeptForm.get('depcode')?.value);

        this.flag = true;
      }
    });

    if (this.flag) {
      this.createDepartmentData.patchValue({
        decode: '',
        depcode: this.parentDeptForm.get('depcode')?.value,
      });
    } else {
      console.log("else");
      this.createDepartmentData.patchValue({
        decode: this.parentDeptForm.get('depcode')?.value,
        depcode: this.parentDeptForm.get('depcode')?.value,
      });
    }
  }

  backToParent(): void {
    this.step = 1;
    this.flag = false;
  }

  buildParentDeptDropDown(): void {}

  createDepartmentData = new FormGroup({
    decode: new FormControl('', Validators.compose([Validators.required])),
    dename: new FormControl('', Validators.compose([Validators.required])),
    depcode: new FormControl(
      { value: '' },
      Validators.compose([Validators.required])
    ),
    deisactive: new FormControl('', Validators.compose([Validators.required])),
  });

  onDepartmentSubmit() {
    console.warn(this.createDepartmentData.value);

    this.service
      .createDepartmentService(this.createDepartmentData.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['../dashboard/department']);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
