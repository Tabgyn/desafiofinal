import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { ProductsTypes } from '../ducks/products';
import { TypesTypes } from '../ducks/types';
import { SizesTypes } from '../ducks/sizes';
import { CartTypes } from '../ducks/cart';
import { OrdersTypes } from '../ducks/orders';

import {
  init, signIn, signUp, signOut,
} from './auth';
import { loadProducts } from './products';
import { loadTypes } from './types';
import { loadSizes } from './sizes';
import { addItem, removeItem } from './cart';
import { loadOrders, addOrder } from './orders';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT_REQUEST, signOut),
    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
    takeLatest(TypesTypes.LOAD_TYPES_REQUEST, loadTypes),
    takeLatest(SizesTypes.LOAD_SIZES_REQUEST, loadSizes),
    takeLatest(CartTypes.ADD_ITEM_REQUEST, addItem),
    takeLatest(CartTypes.REMOVE_ITEM_REQUEST, removeItem),
    takeLatest(OrdersTypes.ADD_ORDER_REQUEST, addOrder),
    takeLatest(OrdersTypes.LOAD_ORDERS_REQUEST, loadOrders),
  ]);
}
