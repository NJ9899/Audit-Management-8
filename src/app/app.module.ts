import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { ChecklistComponent } from './checklist/checklist.component';
import { AuditStatusComponent } from './audit-status/audit-status.component';
import { HeaderComponent } from './header/header.component';
import { ChecklistTypeComponent } from './checklist-type/checklist-type.component';
import { ChecklistInternalComponent } from './checklist-internal/checklist-internal.component';
import { ChecklistSoxComponent } from './checklist-sox/checklist-sox.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //ChecklistComponent,
    AuditStatusComponent,
    HeaderComponent,
    ChecklistTypeComponent,
    ChecklistInternalComponent,
    ChecklistSoxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
