import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  updateCartSuccess: ['data'],
  addItemRequest: ['size'],
  removeItemRequest: ['id'],
});

export const CartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  subtotal: 0,
});

/* Reducers */

export const update = (state, { data }) => {
  let newSubtotal = 0;

  data.map((item) => {
    newSubtotal += item.price;

    return item;
  });

  return state.merge({ data, subtotal: Math.round(newSubtotal * 100) / 100 });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_CART_SUCCESS]: update,
});
