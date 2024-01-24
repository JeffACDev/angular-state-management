import { createReducer, on } from '@ngrx/store';
import {
  loadProductsSuccess,
  loadProductsFailure,
} from '../actions/product.actions';

export const InitialSate: any[]=[];

export const productReducer = createReducer(
  InitialSate,
  on(loadProductsSuccess, (state, { products }) => products),
  on(loadProductsFailure, (state, { error }) => state)
);
