import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ReportComponent } from './report/report.component';
import { IntegrationComponent } from './integration/integration.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ProfileComponent,
    HomeComponent,
    CustomerComponent,
    ReportComponent,
    IntegrationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    NgbModule
  ]
})
export class DashboardModule { }
