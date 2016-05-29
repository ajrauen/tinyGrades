import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn:boolean = false;

  constructor() {}

  ngOnInit() {
  }

}
