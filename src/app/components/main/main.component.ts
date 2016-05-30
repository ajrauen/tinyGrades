import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../+login';
import { DashboardComponent } from '../+dashboard';

import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'tiny-grades-app',
  template:`<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})

//Set up the routes
@Routes([
  {path: '/login',  component: LoginComponent},
  {path: '/dashboard',  component: DashboardComponent}
])

export class MainComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(){
    if(true){    //here's where you could check if a user is already logged in.
    this.router.navigate(['/login']);
    }
  }
}