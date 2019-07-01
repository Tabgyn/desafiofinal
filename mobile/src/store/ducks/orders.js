import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadOrdersRequest: null,
  loadOrdersSuccess: ['data'],
  loadOrdersFailure: null,
  addOrderRequest: ['observation', 'zip', 'street', 'number', 'neighborhood'],
  addOrderSuccess: null,
  addOrderFailure: null,
});

export const OrdersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
});

/* Reducers */

export const success = (state, { data }) => state.merge({ data });
export const add = state => state;

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_ORDERS_SUCCESS]: success,
  [Types.ADD_ORDER_SUCCESS]: add,
});
