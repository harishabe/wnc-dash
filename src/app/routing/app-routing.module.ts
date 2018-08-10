import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LayoutComponent } from '../layout/layout.component';
import { WnsDashboardComponent } from '../layout/wns-dashboard/wns-dashboard.component';
import { ReportComponent } from '../layout/report/report.component';
import { TableComponent } from '../layout/table/table.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'signup',
  component: SignUpComponent
},
{
  path: 'dashboard',
  component: LayoutComponent,
  children: [
    { path: '', redirectTo: '/dashboard/wnc', pathMatch: 'full' },
    { path: 'wnc', component: WnsDashboardComponent },
    { path: 'report', component: ReportComponent },
    { path: 'table', component: TableComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
