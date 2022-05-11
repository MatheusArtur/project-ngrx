import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/auth/store/auth.types';
import { CurrentUserInteface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInterface } from 'src/app/shared/types/registerRequest.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCESS,
  props<{ currentUser: CurrentUserInteface }>()
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE);
