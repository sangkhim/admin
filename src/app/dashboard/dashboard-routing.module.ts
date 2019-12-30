import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from '@app/dashboard/profile/profile.component';
import { AuthGuard } from '@app/_helpers/auth.guard';
import { Role } from '@app/_models';
import { IntegrationComponent } from './integration/integration.component';
import { ReportComponent } from './report/report.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    children: [
      { path: '', component: HomeComponent },
      { path: 'customers', component: CustomerComponent },
      { path: 'reports', component: ReportComponent },
      { path: 'integrations', component: IntegrationComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
