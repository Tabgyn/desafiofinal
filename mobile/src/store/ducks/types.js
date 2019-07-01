import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadTypesRequest: ['product'],
  loadTypesSuccess: ['data'],
  loadTypesFailure: null,
  setType: ['productType'],
});

export const TypesTypes = Types; /* Ficou muito esquisito */
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  currentType: null,
});

/* Reducers */

export const success = (state, { data }) => state.merge({ data });
export const set = (state, { productType }) => state.merge({ currentType: productType });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_TYPES_SUCCESS]: success,
  [Types.SET_TYPE]: set,
});
