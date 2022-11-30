import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditStatusComponent } from './audit-status/audit-status.component';
import { ChecklistInternalComponent } from './checklist-internal/checklist-internal.component';
import { ChecklistSoxComponent } from './checklist-sox/checklist-sox.component';
import { ChecklistTypeComponent } from './checklist-type/checklist-type.component';


import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {path : "login" , component : LoginComponent},
  {path : "" , redirectTo: '/login', pathMatch: 'full'},
 
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
