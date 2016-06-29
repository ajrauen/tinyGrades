import {Reducer, Action} from '@ngrx/store';
import {Class} from '../models/class.model'

export const SET = 'SET';

export const classReducer:any = (state:Class = new Class(), action:Action) => {
  switch (action.type) {
    case SET:{
      return Object.assign([],state,action.payload)
    }

    default:
      return state;
  }
}