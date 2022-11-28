import { Component, OnInit } from '@angular/core';
import { CheckListService } from './checklist.service';
import { Question } from './questions';
import { Respo } from './respo';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  
   constructor(private checklistService:CheckListService) {}

  

  typeInt :string="Internal";
  typeSOX : string="SOX";
  internalQuestions: Question[];
  soxQuestions: Question[];
  yesOrNoResponse :any=[];

  //------------------------------------

  response:any=[];
  fn_response(id:number,flag:boolean,value:string):void{
    let index = this.response.findIndex(item=>item.checkListId==id)
    console.log("index in if: ",index)
    if(index == -1){
      let obj ={
        "checkListId" : id,
        "auditResponse" :flag
        
      }
      this.response.push(obj)
      this.yesOrNoResponse[id]=value
      console.log("resposne:",this.response)

    }

    else{
      
      console.log("index in else: ",index)
      this.yesOrNoResponse[id]=value
      this.response[index].checkListId = id
      this.response[index].auditResponse = flag
      console.log("response",this.response)
      
    }
  }
  


  //------------------------------------

  ngOnInit() {
    let resp= this.checklistService.getQuestionsByType(this.typeInt);
    resp.subscribe((data)=>this.internalQuestions=data);

    let resp1= this.checklistService.getQuestionsByType(this.typeSOX);
    resp1.subscribe((data)=>this.soxQuestions=data);

    //console.log("responses:",this.response);
    // console.log('Questions:'+this.questions1)

  }

}






















//------------------------Second Last --------------------------------------------------
  // response : any=[
  //   {
  //     "checkListId":null,
  //     "auditResponse":""
  //   },
  //   {
  //     "checkListId":null,
  //     "auditResponse":""
  //   },
  //   {
  //     "checkListId":null,
  //     "auditResponse":""
  //   },
  //   {
  //     "checkListId":null,
  //     "auditResponse":""
  //   },
  //   {
  //     "checkListId":null,
  //     "auditResponse":""
  //   },
  //   {
  //     "checkListId":null,
  //     "auditResponse":""
  //   },
  //   {
  //     "checkListId":null,
  //     "auditResponse":""
  //   },
  //   {
  //     "checkListId":null,
  //     "auditResponse":""
  //   },
  //   {
  //     "checkListId":null,
  //     "auditResponse":""
  //   },
  //   {
  //     "checkListId":null,
  //     "auditResponse":""
  //   }
  // ];
  //responseSOX : string[] = [];

  
  // responseYes(i:number):void{
  //   this.response[i].checkListId=i;
  //   this.response[i].auditResponse=true;
  //   this.yesOrNoResponse[i]="YES";
    
  // }

  // responseNo(i:number):void{
  //   this.response[i].checkListId=i;
  //   this.response[i].auditResponse=false;
  //   this.yesOrNoResponse[i]="NO";
  // }

  // soxResponseYes(i:number):void{
  //   this.response[i+5].checkListId=i+5;
  //   this.response[i+5].auditResponse=true;
  //   this.yesOrNoResponse[i+5]="YES";
  // }

  // soxResponseNo(i:number):void{
  //   this.response[i+5].checkListId=i+5;
  //   this.response[i+5].auditResponse=false;
  //   this.yesOrNoResponse[i+5]="NO";
  //   console.log("responses:",this.response);
  // }
//---------------------------------------------------------------------------------------






















// public findQuestionsByType(){
  //   let resp= this.checklistService.getQuestionsByType(this.typeInt);
  //   console.log("type:"+this.typeInt)
  //   resp.subscribe((data)=>this.questions1=data)
  // }
  //type:string= "Internal";


  //console.log("type:"+this.type)
    // let resp = this.checklistService.getQuestionsByType("Internal");
    // resp.subscribe((data)=>this.questions=data);
    // this.checklistService.findAll().subscribe(

    //   data => {this.questions=data;}

    // );



    // responses: Question[]= [
      //     {
      //       "auditChecklistId":1,
      //       "auditChecklistQuestions":"Have all Change requests followed SDLC before PROD move?",
      //       "auditRespon":true
      // },
      // {
      //       "auditChecklistId":2,
      //       "auditChecklistQuestions":"Have all Change requests been approved by the application owner?",
      //       "auditRespon":true
      // },
      // {
      //       "auditChecklistId":3,
      //       "auditChecklistQuestions":"Are all artifacts like CR document, Unit test cases available?",
      //       "auditRespon":true
      // },
      // {
      //       "auditChecklistId":4,
      //       "auditChecklistQuestions":"Is the SIT and UAT sign-off available?",
      //       "auditRespon":true
      // },
      // {
      //       "auditChecklistId":5,
      //       "auditChecklistQuestions":"Is data deletion from the system done with application owner approval?",
      //       "auditRespon":true
      // }    
      // ]


    
  //   
// questions1 :Question[] =[
//   {
//         "auditChecklistId":1,
//         "auditChecklistQuestions":"Have all Change requests followed SDLC before PROD move?"
//   },
//   {
//         "auditChecklistId":2,
//         "auditChecklistQuestions":"Have all Change requests been approved by the application owner?"
//   },
//   {
//         "auditChecklistId":3,
//         "auditChecklistQuestions":"Are all artifacts like CR document, Unit test cases available?"
//   },
//   {
//         "auditChecklistId":4,
//         "auditChecklistQuestions":"Is the SIT and UAT sign-off available?"
//   },
//   {
//         "auditChecklistId":5,
//         "auditChecklistQuestions":"Is data deletion from the system done with application owner approval?"
//   }
// ]
  


 