import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Observable } from 'rxjs/Observable';


import { HeaderComponent } from '../header';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model'
import { LOGIN } from '../../reducers/authentication';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives:[HeaderComponent ,CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class LoginComponent {
  loginForm: ControlGroup;
  user: Observable<User>;

  constructor(fb: FormBuilder, private router: Router,public store: Store<any>) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.user = this.store.select('authentication')
    this.user.subscribe(
      data=>{
        console.log(data)
      }
      )

  }

  doLogin(event) {
    console.log(this.loginForm.value);
    this.store.dispatch({ type: LOGIN });
    this.router.navigate(['/dashboard']);
  }

  onFocus(evt:Event){
    var ele = <HTMLScriptElement>evt.target
    ele.nextElementSibling.className += "editing"
  }


}
