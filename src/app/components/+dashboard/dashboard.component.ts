import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header'

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives:[HeaderComponent]

})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
