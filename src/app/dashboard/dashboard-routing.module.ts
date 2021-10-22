import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
      { path: 'request', loadChildren: () => import('../request/request.module').then(m => m.RequestModule) },
      { path: 'department', loadChildren: () => import('../department/department.module').then(m => m.DepartmentModule) },
      { path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule) },
      { path: 'settings', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
