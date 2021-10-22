import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormControl,FormGroupName,
  Validators,
} from '@angular/forms';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-adddept',
  templateUrl: './adddept.component.html',
  styleUrls: ['./adddept.component.css']
})
export class AdddeptComponent implements OnInit {
  constructor(private router: Router, private service: DepartmentService) {}
  ngOnInit(): void {}



  createDepartmentData = new FormGroup({
    decode: new FormControl('', Validators.compose([Validators.required])),
    dename: new FormControl('', Validators.compose([Validators.required])),
    depcode: new FormControl('', Validators.compose([Validators.required])),
    deisactive: new FormControl('', Validators.compose([Validators.required])),
  });


  onDepartmentSubmit() {
    console.warn(this.createDepartmentData.value);

    this.service.createDepartmentService(this.createDepartmentData.value).subscribe(
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
