import { BackendErrorsInterface } from './../../../shared/interfaces/backend-errors.interface';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { RegisterRequestInterface } from '../../interfaces/register-request.inteface';
import { CurrentUserInterface } from 'src/app/shared/interfaces/current-user.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
