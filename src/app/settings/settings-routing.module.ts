import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'settingshome', pathMatch: 'full' },
  { path: 'settingshome', component: SettingsHomeComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
