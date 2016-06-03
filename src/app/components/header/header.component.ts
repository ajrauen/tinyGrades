import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { LOGOUT } from '../../reducers/authentication';
import { User } from '../../models/user.model'


@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {

  authenticated:boolean = false;
  user: Observable<User>;

  constructor(private router: Router,private store: Store<any>) {

    this.user = this.store.select('authentication');
    this.user.subscribe(
      data=>{
        this.authenticated = data.authenticated;
      })	

  }

  signOut(){
  	this.store.dispatch({type:LOGOUT});
  	this.router.navigate(['/login']);
  }

}
