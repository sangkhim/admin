import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/core/helpers';
import { Role } from '@app/core/models';

import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { HomeComponent } from '@app/dashboard/pages/home/home.component';
import { ProfileComponent } from '@app/dashboard/pages/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Admin]
    },
    children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
