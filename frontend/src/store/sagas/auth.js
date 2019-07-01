import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';

import api from 'services/api';

import AuthActions from 'store/ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    localStorage.setItem('@donjuan:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push('/'));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'E-mail/Senha inválido(s)',
      }),
    );
  }
}

export function* signOut() {
  try {
    localStorage.removeItem('@donjuan:token');

    yield put(push('/signin'));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no logout',
        message: 'Ocorreu um erro ao tentar sair da aplicação',
      }),
    );
  }
}
