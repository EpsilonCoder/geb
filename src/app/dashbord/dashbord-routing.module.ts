import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord.component';
import { ChartsComponent } from './charts/charts.component';
import { CourrierComponent } from './courrier/courrier.component';

const routes: Routes = [
  { path: '', component: DashbordComponent },
  { path: 'chart', component: ChartsComponent },
  { path: 'courier', component: CourrierComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
