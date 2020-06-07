import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import authReducer from '../reducers/auth';
import gridlayoutReducer from '../reducers/gridlayout';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeCreator = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      gridlayout: gridlayoutReducer
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export { storeCreator };
