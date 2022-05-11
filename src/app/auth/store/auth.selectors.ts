import { createSelector } from '@ngrx/store';
import { AppStateIterface } from 'src/app/shared/types/appState.interface';
import { AuthStateInterface } from 'src/app/shared/types/authState.interface';

export const authFeatureSelector = (
  state: AppStateIterface
): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.submitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
);
