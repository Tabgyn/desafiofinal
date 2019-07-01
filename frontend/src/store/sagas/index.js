import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from 'store/ducks/auth';
import { PedidosTypes } from 'store/ducks/pedidos';

import { signIn, signOut } from 'store/sagas/auth';
import { getPedidos } from 'store/sagas/pedidos';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(PedidosTypes.GET_PEDIDOS_REQUEST, getPedidos),
  ]);
}
