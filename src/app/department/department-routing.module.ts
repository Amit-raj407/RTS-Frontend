import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddeptComponent } from './adddept/adddept.component';
import { EditdeptComponent } from './editdept/editdept.component';
import { ViewdeptComponent } from './viewdept/viewdept.component';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: ViewdeptComponent },
  { path: 'add', component: AdddeptComponent },
  { path: 'edit', component: EditdeptComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
