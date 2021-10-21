import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';


@NgModule({
  declarations: [
    SettingsComponent,
    ChangepasswordComponent,
    ResetpasswordComponent,
    SettingsHomeComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
