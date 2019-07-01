import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';
import navigation from '~/services/navigation';

import TypeActions from '../ducks/types';
import ProductActions from '../ducks/products';

export function* loadTypes({ product }) {
  try {
    const response = yield call(api.get, `products/${product.id}/types`);

    yield put(ProductActions.setProduct(product));
    yield put(TypeActions.loadTypesSuccess(response.data));
    navigation.navigate('Type');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Erro ao carregar os tipos'));
  }
}
