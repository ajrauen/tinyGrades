/// <reference path="../../../../typings/globals/lodash/index.d.ts" />
import { Component, ComponentResolver, ViewContainerRef,ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

import { HeaderComponent } from '../header';
import { WidgetComponent } from '../widget';
declare var _;


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives:[HeaderComponent,WidgetComponent]

})
export class DashboardComponent {

  classData:Array<any> = [];
  classStore:Observable<any>;

  @ViewChild('widgetContainer', {read: ViewContainerRef}) widgetContainer;


  constructor(private viewContainerRef:ViewContainerRef, 
              private componentResolver: ComponentResolver,
              private store: Store<any>) {
	  this.classStore = this.store.select('class')
  }

  ngOnInit(){
    this.classStore.subscribe(
        state=>{
          this.classData = state;
          this.loadWidgets();
        },
        error=>{
           console.log('error subscribing to class store')
        }
      )
  }

  loadWidgets(){
    for(var x =0; x < this.classData.length; x++){
      let y = this.classData[x]
      this.componentResolver.resolveComponent(WidgetComponent).then((factory) => {
        let component = this.widgetContainer.createComponent(factory);
        component.instance.data = y
      });  
    }
  }

}
