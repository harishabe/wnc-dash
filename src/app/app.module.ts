import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MatTreeModule } from '@angular/material/tree';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { WnsDashboardComponent } from './layout/wns-dashboard/wns-dashboard.component';
import { ReportComponent } from './layout/report/report.component';
import { TableComponent } from './layout/table/table.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LayoutComponent,
    NavBarComponent,
    WnsDashboardComponent,
    ReportComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
