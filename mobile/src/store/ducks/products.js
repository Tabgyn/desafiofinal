import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadProductsRequest: null,
  loadProductsSuccess: ['data'],
  loadProductsFailure: null,
  setProduct: ['product'],
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  currentProduct: null,
});

/* Reducers */

export const success = (state, { data }) => state.merge({ data });
export const set = (state, { product }) => state.merge({ currentProduct: product });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCTS_SUCCESS]: success,
  [Types.SET_PRODUCT]: set,
});
