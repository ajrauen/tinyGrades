import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Store } from '@ngrx/store';

import { LoginComponent } from '../+login';
import { DashboardComponent } from '../+dashboard';
import { LocalStorageService } from '../../services/local-storage.service'
import { ClassService } from '../../services/class.service';

import { LOGIN } from '../../reducers/authentication';

@Component({
  moduleId: module.id,
  selector: 'tiny-grades-app',
  template:`<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers:[LocalStorageService,ClassService],

})

//Set up the routes
@Routes([
  {path: '/login',  component: LoginComponent},
  {path: '/dashboard',  component: DashboardComponent}
])

export class MainComponent implements OnInit {

  constructor(private router: Router, private storageService:LocalStorageService, 
              private classService:ClassService, private store: Store<any>) {}

  ngOnInit(){
    let auth:Object = this.storageService.get('authenticated');
    if(auth){    //here's where you could check if a user is already logged in.
      this.store.dispatch({ type: LOGIN });
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['/login']);
    }

  }
}