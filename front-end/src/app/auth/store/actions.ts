import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';
import { RegisterRequestInterface } from '../interfaces/register-request.inteface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
