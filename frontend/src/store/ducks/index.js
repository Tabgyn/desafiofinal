import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from 'store/ducks/auth';
import { reducer as pedidos } from 'store/ducks/pedidos';

export default history => combineReducers({
  router: connectRouter(history),
  toastr,
  auth,
  pedidos,
});
