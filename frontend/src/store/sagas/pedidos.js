import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';

import api from 'services/api';

import PedidosActions from 'store/ducks/pedidos';

export function* getPedidos() {
  try {
    const response = yield call(api.get, 'orders');

    yield put(PedidosActions.getPedidosSuccess(response.data));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha nos pedidos',
        message: 'Ocorreu um erro ao tentar obter os pedidos',
      }),
    );
  }
}
