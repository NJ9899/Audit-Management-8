import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable}  from "rxjs/Observable";
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class AuditStatusService {

  constructor(private http:HttpClient) { }

  // public getAuditStatus():Observable<Result>{
  //   return this.http.get<Result>("http://localhost:9631/auditstatus");
  // }
  public getAuditStatus():Observable<Result[]>{
    console.log("Inside getAuditStatus")
    return this.http.get<Result[]>("http://auditmanagmentsystem-env.eba-ybuj3wmd.us-east-2.elasticbeanstalk.com/auditstatus");
  }

  public getAuditStatus1(){
    console.log("Inside getAuditStatus")
    return this.http.get("http://auditmanagmentsystem-env.eba-ybuj3wmd.us-east-2.elasticbeanstalk.com/auditstatus");
  }

  

}




