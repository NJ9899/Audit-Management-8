import { Component, OnInit } from '@angular/core';
import { AuditStatusService } from './audit-status.service';

@Component({
  selector: 'app-audit-status',
  templateUrl: './audit-status.component.html',
  styleUrls: ['./audit-status.component.css']
})
export class AuditStatusComponent implements OnInit {
  
  auditStatus:any;

  constructor(private auditStatusService:AuditStatusService) { }

  ngOnInit() {
    let resp= this.auditStatusService.getAuditStatus();
    resp.subscribe((data)=>this.auditStatus=data);
  }

}
