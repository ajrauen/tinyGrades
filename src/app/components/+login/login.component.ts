import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../../services/local-storage.service'

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

  constructor(fb: FormBuilder, private router:Router,private store:Store<any>, private storageService:LocalStorageService) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });


  }

  doLogin(event) {
    console.log(this.loginForm.value);
    this.store.dispatch({ type: LOGIN });
    this.storageService.save('authenticated', true)

    this.router.navigate(['/dashboard']);
  }

  onFocus(evt:Event){
    var ele = <HTMLScriptElement>evt.target
    ele.nextElementSibling.className += "editing"
  }


}
