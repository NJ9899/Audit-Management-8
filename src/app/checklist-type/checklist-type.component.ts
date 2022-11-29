import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checklist-type',
  templateUrl: './checklist-type.component.html',
  styleUrls: ['./checklist-type.component.css']
})
export class ChecklistTypeComponent implements OnInit {

  selectedValue : String;

  constructor(private routes: Router) { }

  ngOnInit() {
  }

  checktype() : void {
    if(this.selectedValue=="Internal")
    {
      this.routes.navigate(['checklist-internal']);
    }
      
    else
    {
      this.routes.navigate(['checklist-sox']);
    }
      
  }

}
