import {Reducer, Action} from '@ngrx/store';
import {User} from '../models/user.model'

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const authenticationReducer:any = (state:User = new User(), action:Action) => {
  switch (action.type) {
    case LOGIN:{
      state.authenticated = true;
      return Object.assign({},state)
    }
      

    case LOGOUT:{
      state.authenticated = false;
      return Object.assign({},state)
    }
      

    default:
      return state;
  }
}