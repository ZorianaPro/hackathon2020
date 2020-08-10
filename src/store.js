import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import rootSaga from './sagas';

if (module.hot) {
  module.hot.accept();
}

if ('__REDUX_DEVTOOLS_EXTENSION__' in window) {
  window.__REDUX_DEVTOOLS_EXTENSION__();
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;