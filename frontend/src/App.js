import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';

import 'config/reactotron';
import store from 'store';
import Routes from 'routes';

import GlobalStyle from 'styles/global';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <ReduxToastr
        preventDuplicates
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
