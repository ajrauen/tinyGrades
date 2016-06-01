import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';
import { HeaderComponent } from '../header';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { LOGIN } from '../../reducers/authentication';

interface AppState {
  counter: number;
}

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives:[HeaderComponent ,CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class LoginComponent {
  loginForm: ControlGroup;

  constructor(fb: FormBuilder, private router: Router,public store: Store<AppState>) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

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
