import { Component, OnInit } from '@angular/core';
import { CheckListService } from '../checklist/checklist.service';

@Component({
  selector: 'app-checklist-sox',
  templateUrl: './checklist-sox.component.html',
  styleUrls: ['./checklist-sox.component.css']
})
export class ChecklistSoxComponent implements OnInit {

  constructor(private checklistService:CheckListService) {}

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
    console.log("count",this.count);
    let obj:any = {
      "auditType":"SOX",
      "auditResponseYesCount":this.count
    }
    this.response.push(obj)
    console.log("Respone",this.response)
  }

  ngOnInit() {
    let resp= this.checklistService.getQuestionsByType(this.typeInt);
    resp.subscribe((data)=>this.soxQuestions=data);
  }



}

