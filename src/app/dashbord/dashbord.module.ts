import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChartsComponent } from './charts/charts.component';
import { ChartModule } from 'angular-highcharts';
import { CourrierComponent } from './courrier/courrier.component';


@NgModule({
  declarations: [
    DashbordComponent,
    SidebarComponent,
    ChartsComponent,
    CourrierComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    ChartModule
  ]
})
export class DashbordModule { }
