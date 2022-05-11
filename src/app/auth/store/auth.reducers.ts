import { AuthStateInterface } from 'src/app/shared/types/authState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { registerAction } from 'src/app/auth/store/auth.actions';

const initialState: AuthStateInterface = {
  submitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      submitting: true,
    })
  )
);

export function authReducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
