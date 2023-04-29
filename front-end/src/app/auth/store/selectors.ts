import { AppStateInterface } from 'src/app/shared/interfaces/app-state.interface';
import { AuthStateInterface } from '../interfaces/auth-state.inteface';
import { createSelector } from '@ngrx/store';

export const authFeatureSelector = (
  state: AppStateInterface
): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
