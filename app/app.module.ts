import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportFormComponent } from './report-form/report-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReportsComponent,
    EntryFormComponent,
     WelcomeComponent,
     ReportFormComponent
     
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [],  

  bootstrap: [AppComponent]
})
export class AppModule { }
