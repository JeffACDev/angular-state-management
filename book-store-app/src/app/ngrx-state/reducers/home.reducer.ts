import { createReducer, on } from '@ngrx/store';
import { show, hide } from '../actions/home.actions';

export const InitialSate = false;

export const homeReducer = createReducer(
  InitialSate,
  on(show, (state) => true),
  on(hide, (state) => false)
);
