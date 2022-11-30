import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckListService } from '../checklist.service';

@Component({
  selector: 'app-checklist-sox',
  templateUrl: './checklist-sox.component.html',
  styleUrls: ['./checklist-sox.component.css']
})
export class ChecklistSoxComponent implements OnInit {
  message: Object;

  constructor(private checklistService:CheckListService,private routes: Router) {}

  typeInt :string="SOX";
  soxQuestions: any;
  count:number = 0;
  yesOrNoResponse :any=[];

  response:any=[];
  
  fn_response(id:number,value:string):void{
      this.yesOrNoResponse[id]=value
      console.log("Yes andNo",this.yesOrNoResponse)
  }

  getCount(): void{
    for(let i=0; i<5; i++)
    {
      if(this.yesOrNoResponse[i] === "YES")
      {
        this.count = this.count + 1;
      }
    }
  }

  onSubmit(){
    this.getCount()
    //console.log("count",this.count);
    let obj:any = {
      "auditType":"SOX",
      "auditResponseYesCount":this.count,
      "benchMarkEntity":{
        "auditBenchmarkId":2
      }
    }
    //this.response.push(obj)
    console.log("Respone",obj)
    let resp = this.checklistService.postResponses(obj)
    resp.subscribe((data)=>this.message=data) 
    this.routes.navigate(['/audit-status']); 
  }

  ngOnInit() {
    let resp= this.checklistService.getQuestionsByType(this.typeInt);
    resp.subscribe((data)=>this.soxQuestions=data);
  }



}

