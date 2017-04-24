import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './configStore';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
      <Router routes={routes} history={hashHistory} />
    </Provider>
  , document.getElementById('root')
);
