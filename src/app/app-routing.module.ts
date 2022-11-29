import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditStatusComponent } from './audit-status/audit-status.component';

import { ChecklistComponent } from './checklist/checklist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : " " , redirectTo: '/login'},
  {path : "login" , component : LoginComponent},
  {path : "checklist" , component : ChecklistComponent},
  {path : "audit-status" , component : AuditStatusComponent},
  // {path : "checklist-type" , component : ChecklistAuditTypeComponent},
  // {path : "checklist-internal" , component : ChecklistInternalComponent},
  //{path : "checklist-sox" , component : ChecklistAuditTypeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
