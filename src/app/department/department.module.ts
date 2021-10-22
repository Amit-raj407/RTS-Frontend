import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { AdddeptComponent } from './adddept/adddept.component';
import { EditdeptComponent } from './editdept/editdept.component';
import { ViewdeptComponent } from './viewdept/viewdept.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdddeptComponent,
    EditdeptComponent,
    ViewdeptComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
