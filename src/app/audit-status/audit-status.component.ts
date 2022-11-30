import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditStatusService } from './audit-status.service';
import { Result } from './result';

@Component({
  selector: 'app-audit-status',
  templateUrl: './audit-status.component.html',
  styleUrls: ['./audit-status.component.css']
})
export class AuditStatusComponent implements OnInit {
  
  auditStatus:Result[]=[];
  auditStatus1:any;
  auditStatusLength: number;
  

  constructor(private auditStatusService:AuditStatusService,private routes: Router) { }

  

  ngOnInit() {
    this.getData()


    // let resp= this.auditStatusService.getAuditStatus();
    // resp.subscribe((data)=>this.auditStatus=data);
    // let resp1= this.auditStatusService.getAuditStatus1();
    // resp1.subscribe((data)=>this.auditStatus1=data);

    console.log("Result",this.auditStatus)

  }

  getData():void{
   
    this.auditStatusService.getAuditStatus().subscribe((data)=>{
      this.auditStatus=data;
      this.auditStatusLength = data.length-1
      console.log(this.auditStatus)
      console.log(this.auditStatusLength)
    })

    //this.auditStatusService.getAuditStatus().subscribe((data)=>{this.auditStatus=data})
    
  }

  onSubmit(){
    this.routes.navigate(['checklist-type']); 
  }

}
