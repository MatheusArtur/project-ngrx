import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/auth/store/auth.types";
import { RegisterRequestInterface } from "src/app/shared/types/registerRequest.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
