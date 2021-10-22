import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrequestComponent } from './addrequest/addrequest.component';
import { EditrequestComponent } from './editrequest/editrequest.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';

const routes: Routes = [
  { path: '',  redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: ViewrequestComponent },
  { path: 'add', component: AddrequestComponent },
  { path: 'edit/:reqcode', component: EditrequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
