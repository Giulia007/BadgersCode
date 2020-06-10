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

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: undefined
}

/* function authReducer(state, action): AuthState {} */

export const authReducer = createReducer(
  initialAuthState,
  //what to do in response to login user action
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  })

);
