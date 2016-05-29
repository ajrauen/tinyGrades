import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';
import { HeaderComponent } from '../header';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives:[HeaderComponent]
})
export class LoginComponent {
	loginForm:any

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  doLogin(event) {
    console.log(this.loginForm.value);
    event.preventDefault();
  }

}
