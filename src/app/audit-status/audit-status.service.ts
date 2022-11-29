import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuditStatusService {

  constructor(private http:HttpClient) { }

  public getAuditStatus():any{
    return this.http.get("http://localhost:9631/auditstatus");
  }
}




