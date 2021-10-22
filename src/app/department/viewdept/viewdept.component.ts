import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartmentService } from '../services/department.service';


@Component({
  selector: 'app-viewdept',
  templateUrl: './viewdept.component.html',
  styleUrls: ['./viewdept.component.css']
})
export class ViewdeptComponent implements OnInit {

  deptList: any[] = [];
  sub!: Subscription;



  constructor(private router: Router, private service: DepartmentService) {}
  ngOnInit(): void {

    this.sub = this.service.getAllDepartments().subscribe({
      next: responseData => {
        console.log(responseData.obj[0]);
        this.deptList = responseData.obj[0];
      }
    })



  }

}
