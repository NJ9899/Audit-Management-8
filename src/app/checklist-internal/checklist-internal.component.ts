import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckListService } from '../checklist.service';


@Component({
  selector: 'app-checklist-internal',
  templateUrl: './checklist-internal.component.html',
  styleUrls: ['./checklist-internal.component.css']
})
export class ChecklistInternalComponent implements OnInit {
 
  message: any;

  constructor(private checklistService:CheckListService,private routes: Router) {}

  typeInt :string="Internal";
  internalQuestions: any;
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
      "auditType":'Internal',
      "auditResponseYesCount":this.count,
      "benchMarkEntity":{
        "auditBenchmarkId":1
      }
    }

    console.log("Respone",obj)
    //this.checklistService.postResponses(this.response).subscribe((data))
    let resp = this.checklistService.postResponses(obj)
    resp.subscribe((data)=>this.message=data) 
    this.routes.navigate(['/audit-status']); 
  }

  ngOnInit() {
    let resp= this.checklistService.getQuestionsByType(this.typeInt);
    resp.subscribe((data)=>this.internalQuestions=data);
  }

}
