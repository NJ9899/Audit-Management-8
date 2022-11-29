import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditStatusComponent } from './audit-status/audit-status.component';
import { ChecklistInternalComponent } from './checklist-internal/checklist-internal.component';
import { ChecklistSoxComponent } from './checklist-sox/checklist-sox.component';
import { ChecklistTypeComponent } from './checklist-type/checklist-type.component';

import { ChecklistComponent } from './checklist/checklist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : " " , redirectTo: '/login'},
  {path : "login" , component : LoginComponent},
  {path : "checklist" , component : ChecklistComponent},
  {path : "audit-status" , component : AuditStatusComponent},
  {path : "checklist-type" , component : ChecklistTypeComponent},
  {path : "checklist-internal" , component : ChecklistInternalComponent},
  {path : "checklist-sox" , component : ChecklistSoxComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
