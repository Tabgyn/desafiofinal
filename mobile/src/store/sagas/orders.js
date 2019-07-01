import { call, put, select } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';
import navigation from '~/services/navigation';

import CartActions from '../ducks/cart';
import OrderActions from '../ducks/orders';

export function* loadOrders() {
  try {
    const response = yield call(api.get, 'orders');

    yield put(OrderActions.loadOrdersSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Erro ao carregar os pedidos'));
  }
}

export function* addOrder({
  observation, zip, street, number, neighborhood,
}) {
  const cartItems = yield select(state => state.cart.data);
  const subtotal = yield select(state => state.cart.subtotal);

  yield call(api.post, 'orders', {
    observation,
    total_price: subtotal,
    zip,
    street,
    number,
    neighborhood,
    items: cartItems.map(item => ({
      product_id: item.product.id,
      type_id: item.productType.id,
      size_id: item.size.id,
    })),
  });

  yield put(OrderActions.addOrderSuccess());
  yield put(CartActions.updateCartSuccess([]));
  navigation.navigate('Product');
  yield put(ToastActionsCreators.displayInfo('Seu pedido foi realizado com sucesso'));
}
