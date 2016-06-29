import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'widget',
  templateUrl: 'widget.component.html',
  styleUrls: ['widget.component.css']
})
export class WidgetComponent {

  isFlipped:Boolean = false;
  @Input() 
  set data(data:any){
    this.type = data.type
  }

  type:string;
  id:string;

  constructor() {}



  onFlip(){
  	this.isFlipped = !this.isFlipped;
  }

}
