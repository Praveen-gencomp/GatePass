import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { PrintFormComponent } from './print-form/print-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
 {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent},
      // { path: 'print', component: PrintFormComponent},
      { path: 'print/:unitNo', component: PrintFormComponent},
      { path: 'reports', component: ReportsComponent },
      { path: 'entry_form', component: EntryFormComponent },
      // { path: 'report_form', component: ReportFormComponent },
      {path: 'report_form/:unitNo', component: ReportFormComponent}
      // Add more routes here
    ]
  },
  // { path: 'reports', component: ReportsComponent },
  // { path: 'entry_form', component: EntryFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:false, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
