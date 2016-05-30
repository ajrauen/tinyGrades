import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';
import { HeaderComponent } from '../header';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives:[HeaderComponent ,CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class LoginComponent {
  loginForm: ControlGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  doLogin(event) {
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }

  onBlur(evt:Event){
    console.log(evt)
  }


}
