import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from 'routes/history';

import Private from 'routes/private';
import Guest from 'routes/guest';

import SignIn from 'pages/Auth/SignIn';
import Pedidos from 'pages/Pedidos';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Private exact path="/" component={Pedidos} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
