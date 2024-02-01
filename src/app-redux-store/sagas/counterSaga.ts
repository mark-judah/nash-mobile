// sagas/counterSaga.ts
import { put, takeEvery } from 'redux-saga/effects';
import { increment, decrement } from '../actions/counterActions';

function* incrementAsync() {
  yield put(increment());
}

function* decrementAsync() {
  yield put(decrement());
}

export function* watchIncrement() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* watchDecrement() {
  yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}
