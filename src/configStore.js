import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import appSaga from './sagas/sagas';
import rootReducer from './reducers/rootReducer';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [
    thunk,
    sagaMiddleware,
  ];

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(appSaga);

  return store;
};

export default configureStore;
