import { call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';
import navigation from '~/services/navigation';

import AuthActions from '../ducks/auth';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@donjuan:token');

  if (token) {
    yield put(AuthActions.signInSuccess(token));
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    yield call([AsyncStorage, 'setItem'], '@donjuan:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    navigation.navigate('Home');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Erro ao logar o usuário'));
  }
}

export function* signUp({ name, email, password }) {
  try {
    yield call(api.post, 'users', {
      name,
      email,
      password,
      role: 'client',
    });
    const response = yield call(api.post, 'sessions', { email, password });

    yield call([AsyncStorage, 'setItem'], '@donjuan:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    navigation.navigate('Product');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Erro ao cadastrar o usuário'));
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
  yield put(AuthActions.signOutSuccess());
}
