import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET } from '../reducers/class';

@Injectable()
export class ClassService {


	classData:Array<any> = [
		{
			"type":"English",
			"id":1
		},
		{
			"type":"Math",
			"id":2
		}
	]

  constructor(private store: Store<any>) {
  	this.store.dispatch({type:SET,payload:this.classData});
  }

}

