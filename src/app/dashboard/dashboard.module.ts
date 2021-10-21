import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserModule } from '../user/user.module';
import { RequestModule } from '../request/request.module';
import { DepartmentModule } from '../department/department.module';
import { ProfileModule } from '../profile/profile.module';
import { SettingsModule } from '../settings/settings.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UserModule,
    RequestModule,
    DepartmentModule,
    ProfileModule,
    SettingsModule
  ]
})
export class DashboardModule { }
