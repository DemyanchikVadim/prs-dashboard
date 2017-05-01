import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import configStore from './configStore';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/AppActions';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';

const store = configStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
    <Provider store={store}>
      <Router routes={routes} history={browserHistory} />
    </Provider>
  , document.getElementById('root')
);
