import {
  call,
  put,
  takeLatest,
  all,
  fork,
  take
} from 'redux-saga/effects';
import { setLayout } from '../actions/gridlayout';
import * as layoutService from '../services/layout';

function* updateLayout(action) {
  try {
    // Don't cause re-render on grid
    yield put({
      type: 'LAYOUT_UPDATED',
      layoutItems: action.newLayout
    });
    yield call(layoutService.updateLayout, {
      layoutId: action.layoutId,
      items: action.newLayout
    });
    yield put({ type: 'LAYOUT_UPDATE_SYNC_SUCCESS' });
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
        yield put(setLayout(response.data._id, response.data.items));
      }
    }
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('UPDATE_LAYOUT', updateLayout),
    fork(initLayout)
  ]);
}
