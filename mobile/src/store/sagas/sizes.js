import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';
import navigation from '~/services/navigation';

import SizeActions from '../ducks/sizes';
import TypeActions from '../ducks/types';

export function* loadSizes({ productType }) {
  try {
    const response = yield call(api.get, `types/${productType.id}/sizes`);

    yield put(TypeActions.setType(productType));
    yield put(SizeActions.loadSizesSuccess(response.data));
    navigation.navigate('Size');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Erro ao carregar os tamanhos'));
  }
}
