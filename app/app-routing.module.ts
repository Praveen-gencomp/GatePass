import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
 {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent},
      { path: 'reports', component: ReportsComponent },
      { path: 'entry_form', component: EntryFormComponent },
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
