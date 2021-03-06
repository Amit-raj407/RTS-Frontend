import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { AdddeptComponent } from './adddept/adddept.component';
import { EditdeptComponent } from './editdept/editdept.component';
import { ViewdeptComponent } from './viewdept/viewdept.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentdeptComponent } from './parentdept/parentdept.component';


@NgModule({
  declarations: [
    AdddeptComponent,
    EditdeptComponent,
    ViewdeptComponent,
    ParentdeptComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
