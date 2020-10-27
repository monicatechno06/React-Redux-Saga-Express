import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { applyCouponSaga } from './saga'
import createSagaMiddleware from 'redux-saga'
import totalReducer from './store/reducers/total';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';

const rootReducer = combineReducers({
  total: totalReducer,
  res: resultReducer
});

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(applyCouponSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
