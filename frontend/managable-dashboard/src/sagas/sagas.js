import {
  call,
  put,
  takeLatest,
  all,
  fork,
  take,
  select
} from 'redux-saga/effects';
import { setLayout } from '../actions/gridlayout';
import * as layoutService from '../services/layout';
import * as authService from '../services/auth';

const getItems = (state) => state.gridlayout.layout.layoutItems;

function* updateLayout(action) {
  try {
    // Don't cause re-render on grid
    if (action.layoutId) {
      yield put({
        type: 'LAYOUT_UPDATED',
        layoutItems: action.newLayout
      });
      const newItems = yield select(getItems);
      yield call(layoutService.updateLayout, {
        layoutId: action.layoutId,
        items: newItems
      });
      yield put({ type: 'LAYOUT_UPDATE_SYNC_SUCCESS' });
    }
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* updateCanAdd(action) {
  try {
    yield put({
      type: 'UPDATE_CAN_ADD_IN_STORE',
      canAdd: action.canAdd
    });
    yield call(layoutService.updateLayout, {
      layoutId: action.layoutId,
      canAdd: action.canAdd
    });
    yield put({ type: 'LAYOUT_UPDATE_SYNC_SUCCESS' });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* startLogin(action) {
  try {
    const response = yield call(authService.login, action.payload);
    yield put({ type: 'SET_LOGGED_IN', user: response.data });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* shareSettings(action) {
  try {
    yield call(authService.shareSettings, {
      target: action.target,
      source: action.source
    });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* checkLogin() {
  try {
    const response = yield call(authService.checkLogin);
    if (response.data.caut) {
      yield put({ type: 'SET_LOGGED_IN', user: response.data });
    }
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* initLayout() {
  try {
    while (true) {
      const action = yield take('INIT_LAYOUT');
      const response = yield call(
        layoutService.getLayoutOfUser,
        action.userId
      );
      if (response.data && response.data.items) {
        yield put(
          setLayout(
            response.data._id,
            response.data.items,
            response.data.canAdd
          )
        );
      }
    }
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('UPDATE_LAYOUT', updateLayout),
    takeLatest('UPDATE_CAN_ADD', updateCanAdd),
    takeLatest('START_LOGIN', startLogin),
    takeLatest('CHECK_LOGIN', checkLogin),
    takeLatest('SHARE_SETTINGS', shareSettings),
    fork(initLayout)
  ]);
}
