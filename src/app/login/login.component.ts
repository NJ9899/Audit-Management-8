import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.routes.navigate(['checklist-type']);
  }

}
