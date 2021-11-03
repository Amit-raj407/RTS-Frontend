import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {
  FormGroup,
  FormControl,
  FormsModule,
  Validators,
} from '@angular/forms';
import { DepartmentService } from 'src/app/department/services/department.service';
import { PermissionData } from '../model/PermissionData';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  constructor(
    private _activatedRouter: ActivatedRoute,
    private router: Router,
    private service: UserService,
    private deptService: DepartmentService
  ) {}

  username: string | null = '';
  userId!: number;

  departmentList: any[] = [];

  permissionDataArray: PermissionData[] = [];

  permissionData!: PermissionData;

  step: number = 1;

  userForm = new FormGroup({
    uName: new FormControl('', Validators.compose([Validators.required])),
    uFName: new FormControl('', Validators.compose([Validators.required])),
    uLName: new FormControl('', Validators.compose([Validators.required])),
    uEmail: new FormControl('', Validators.compose([Validators.required])),
    uPassword: new FormControl('', Validators.compose([Validators.required])),
    uIsActive: new FormControl('', Validators.compose([Validators.required])),
  });

  updateValuesInForm(reqValues: any): void {
    this.userForm.patchValue({
      uName: reqValues.uName,
      uFName: reqValues.uFName,
      uLName: reqValues.uLName,
      uEmail: reqValues.uEmail,
      uPassword: reqValues.uPassword,
      uIsActive: reqValues.uIsActive,
    });
  }

  buildDepartmentList(): void {
    this.deptService.getAllDepartments().subscribe({
      next: responseData => {
        console.log(responseData.obj[0]);
        this.departmentList = responseData.obj[0];
        this.buildPermissionArray();
      },
      error: err => {
        console.log(err);

      }
    })
  }

  buildPermissionArray(): void {
    this.departmentList.forEach(row => {
      this.permissionData = {
        deptid : row.deid,
        userid : this.userId,
        role: 'no permission'
      }
      this.permissionDataArray.push(this.permissionData);
    })
    console.log(this.permissionDataArray);

  }

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe(
      (param) => (this.username = param.get('username'))
    );
    this.service.getUserByUsername(this.username).subscribe({
      next: (responseData) => {
        console.log(responseData.obj[0]);
        this.userId = responseData.obj[0].uId;
        this.updateValuesInForm(responseData.obj[0]);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.buildDepartmentList();

  }

  userUpdateSubmit() {
    console.warn(this.userForm.value);
    this.service.updateUser(this.userForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/dashboard/user/']);
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

  goToManageAccess() {
    this.step = 2;
  }

  backToEdit() {
    this.step = 1;
  }

  pushDataToPermissionArray(permission: string, i: number) {
    console.log(permission, i);
    console.log(this.departmentList);
    console.log(this.departmentList[i].deid);

    this.permissionData = {
      deptid : this.departmentList[i].deid,
      userid : this.userId,
      role: permission
    }
    console.log(this.permissionData);

    this.permissionDataArray[i] = this.permissionData;

    console.log(this.permissionDataArray);

    // if(this.permissionDataArray[i] == undefined) {
    //   this.permissionDataArray[i] = this.permissionData;
    // } else {
    //   this.pe
    // }



    // if(this.permissionDataArray.length == 0) {
    //   this.permissionDataArray.push(this.permissionData);
    // } else {
    //   this.permissionDataArray.forEach( (row, i) => {
    //     if(row.deptid == this.departmentList[i].deid) {
    //       this.permissionDataArray[i] = this.permissionData;
    //     } else {
    //       this.permissionDataArray.push(this.permissionData);
    //     }
    //   })
    // }

    // this.permissionDataArra



    // this.permissionDataArray.push(this.permissionData);
    // console.log(this.permissionDataArray);

  }


  saveDepartmentAccess(): void {
    console.log(this.permissionDataArray);

  }


}
