import { createAction, props } from '@ngrx/store';
import { User } from '../users';

// Action Types
export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const addUser = createAction(
  '[User] Add User',
  props<{ user: User }>()
);
export const addUserSuccess = createAction(
  '[User] Add User Success',
  props<{ user: User }>()
);
export const addUserFailure = createAction(
  '[User] Add User Failure',
  props<{ error: any }>()
);
