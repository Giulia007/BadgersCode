import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { User } from 'src/app/model/user';
import { AuthActions } from '../actions-types';
import { routerReducer } from '@ngrx/router-store';
import { environment } from 'src/environments/environment.prod';
/* import { environment } from 'src/environments/environment'; */

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

export interface AppState {

}

export const initialAuthState: AuthState = {
  user: undefined
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export const authReducer = createReducer(
  initialAuthState,
  //what to do in response to login user action
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined
    }
  })

);

//meta reducer
export function logger(reducer:ActionReducer<any>)
    : ActionReducer<any> {
    return (state, action) => {
        console.log("state before: ", state);
        console.log("action", action);
      //here we pass the mutated state and the action
      //down to the normal reducer and return its output
        return reducer(state, action);
    }
}

export const metaReducers: MetaReducer<AppState>[] =
    !environment.production ? [logger] : [];