import { createBrowserHistory } from 'history';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeCreator = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};

const history = createBrowserHistory();
const baseHref = '/';
const apiBase = '/dashboard-api/';

export { storeCreator, history, baseHref, apiBase };
