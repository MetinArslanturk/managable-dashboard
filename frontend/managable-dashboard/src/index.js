import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history, storeCreator } from './configs/config';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Prevent deprecated in strictmode console warnings. Hopefully they will upgrade then this will be removed
(() => {
  const oldLogError = console.error;
  console.error = function (...args) {
    if (
      typeof args[0] !== 'string' ||
      (args[0].indexOf('is deprecated in StrictMode') === -1 &&
        args[0].indexOf(
          'UNSAFE_componentWillReceiveProps in strict mode'
        ) === -1 &&
        args[0].indexOf(
          'UNSAFE_componentWillMount in strict mode'
        ) === -1)
    ) {
      oldLogError.apply(console, args);
    }
  };
})();

const store = storeCreator();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
