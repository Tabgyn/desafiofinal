import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signUpRequest: ['name', 'email', 'password'],
  signOutRequest: null,
  signOutSuccess: null,
  initCheckSuccess: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: false,
  token: null,
});

/* Reducers */

export const signIn = (state, { token }) => state.merge({ signedIn: true, token });
export const logout = state => state.merge({ signedIn: false, token: null });
export const checkSuccess = state => state.merge({ authChecked: true });
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: signIn,
  [Types.SIGN_OUT_SUCCESS]: logout,
  [Types.INIT_CHECK_SUCCESS]: checkSuccess,
});
