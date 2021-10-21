import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { AddrequestComponent } from './addrequest/addrequest.component';
import { EditrequestComponent } from './editrequest/editrequest.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddrequestComponent,
    EditrequestComponent,
    ViewrequestComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RequestModule { }
