import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';

import ProductActions from '../ducks/products';

export function* loadProducts() {
  try {
    const response = yield call(api.get, 'products');

    yield put(ProductActions.loadProductsSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Erro ao carregar os produtos'));
  }
}
