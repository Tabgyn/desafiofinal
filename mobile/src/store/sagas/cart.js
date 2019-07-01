import { put, select } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';
import navigation from '~/services/navigation';

import CartActions from '../ducks/cart';

export function* loadCart() {
  try {
    const items = yield select(state => state.cart.data);

    yield put(CartActions.loadCartSuccess(items));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Erro ao carregar o carrinho'));
  }
}

export function* addItem({ size }) {
  const cartItems = yield select(state => state.cart.data);
  const product = yield select(state => state.products.currentProduct);
  const productType = yield select(state => state.types.currentType);

  const cartItem = {
    id: `${Date.now()}`,
    product,
    productType,
    size,
    price: productType.price_factor * size.base_price,
  };

  let newCart = [];
  newCart = [...cartItems];
  newCart.push(cartItem);

  yield put(CartActions.updateCartSuccess(newCart));
  navigation.navigate('Cart');
}

export function* removeItem({ id }) {
  const cartItems = yield select(state => state.cart.data);
  let newCart = [];
  newCart = cartItems.filter(item => item.id !== id);
  yield put(CartActions.updateCartSuccess(newCart));
}

export function* clearCart() {
  const newCart = [];
  yield put(CartActions.updateCartSuccess(newCart));
}
