import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parentdept',
  templateUrl: './parentdept.component.html',
  styleUrls: ['./parentdept.component.css']
})
export class ParentdeptComponent implements OnInit {

  constructor() { }


  parentDeptForm = new FormGroup({
    depcode: new FormControl('',
      Validators.required
    )
  });

  submitParentForm() {

  }


  buildParentDeptDropDown(): void {
    
  }

  ngOnInit(): void {
  }

}
