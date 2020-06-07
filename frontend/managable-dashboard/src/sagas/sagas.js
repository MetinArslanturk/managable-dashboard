import {
  call,
  put,
  takeLatest,
  all,
  fork,
  take
} from 'redux-saga/effects';
import { setLayout } from '../actions/gridlayout';

function mockApiCall(payload) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(payload);
    }, 1000);
  });
}
function* updateLayout(action) {
  try {
    // Don't cause re-render on grid
    yield put({
      type: 'LAYOUT_UPDATED',
      layoutItems: action.newLayout
    });
    const response = yield call(mockApiCall, action.newLayout);
    //    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* initLayout() {
  try {
    while (true) {
      const action = yield take('INIT_LAYOUT');
      const payload = yield call(mockApiCall, [
        { i: 'a', x: 0, y: 0, w: 1, h: 2 },
        { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 }
      ]);
      yield put(setLayout(payload));
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
