import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadSizesRequest: ['productType'],
  loadSizesSuccess: ['data'],
  loadSizesFailure: null,
  setSize: ['size'],
});

export const SizesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  currentSize: null,
});

/* Reducers */

export const success = (state, { data }) => state.merge({ data });
export const set = (state, { size }) => state.merge({ currentSize: size });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SIZES_SUCCESS]: success,
  [Types.SET_SIZE]: set,
});
