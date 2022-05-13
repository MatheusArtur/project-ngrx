import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/auth/store/auth.types';
import { ApiErrorsInterface } from 'src/app/shared/apiErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { LoginRequestInterface } from 'src/app/shared/types/loginRequest.interface';

export const loginAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: ApiErrorsInterface }>()
);
