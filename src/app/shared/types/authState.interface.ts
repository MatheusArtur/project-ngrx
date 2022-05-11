import { ApiErrorsInterface } from 'src/app/shared/apiErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export interface AuthStateInterface {
  submitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLogged: boolean | null;
  validationErrors: ApiErrorsInterface | null;
}
