import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers/app.js';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import * as serviceWorker from './serviceWorker';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './saga';

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   rootReducer, /* preloadedState, */
   compose(
    //  applyMiddleware(sagaMiddleware),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   )
 );
 
//  sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
