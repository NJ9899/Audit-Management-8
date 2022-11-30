import { Injectable } from '@angular/core';
import { Observable}  from "rxjs/Observable";
import { Question } from "./questions";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CheckListService {

  constructor(private http:HttpClient){}

  public getQuestionsByType(typeInt):Observable<Question[]>{
    console.log("type:"+typeInt);
    return this.http.get<Question[]>("http://localhost:9631/checklist/"+typeInt);
  }

  // public postResponses(response):any{
  //   const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  //   return this.http.post("http://localhost:9631/auditstatus",response,{headers,observe:'body',responseType:'json'});
  // }

  public postResponses(response){
    //const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
    return this.http.post("http://localhost:9631/auditstatus",response,{responseType:'text' as 'json'});
  }
}















// export class CheckListService {

//   private userUrl:string;

//   readonly APIUrl = "http://localhost:9080/checklist/Internal";

//   responses:Question[] = [];

//   public findAll(): Observable<Question[]>{

//     return this.http.get<Question[]>(this.APIUrl);

//   }


//   constructor(private http: HttpClient) {

//     //this.userUrl="http://localhost:9080/checklist/Internal";

//    }

   

 


   

//   // constructor(private http : HttpClient) {  }

//   // getQuestionsFromBack(type : string) : Observable<Question[]> {
//   //     return this.http.post<Question[]>(this.APIUrl + '/AuditCheckListQuestions',{'auditType':type});
//   // }
// }

// // public findAll(): Observable<Question[]>{

// //   return this.http.get<Question[]>(this.userUrl);

// // }





  

