import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/auth/store/actionTypes";
import { RegisterRequestInterface } from "src/app/shared/types/registerReuqest.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
