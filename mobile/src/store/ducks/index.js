import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import { reducer as auth } from './auth';
import { reducer as products } from './products';
import { reducer as types } from './types';
import { reducer as sizes } from './sizes';
import { reducer as cart } from './cart';
import { reducer as orders } from './orders';

const reducers = combineReducers({
  auth,
  products,
  types,
  sizes,
  cart,
  orders,
  toast,
});

export default reducers;
