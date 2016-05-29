import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../+login';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'tiny-grades-app',
  template:`<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]

})

@Routes([
  {path: '/login',  component: LoginComponent}
])


export class MainComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(){
  	if(true){
		this.router.navigate(['/login']);
  	}
  }

}
