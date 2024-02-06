import { call, spawn } from 'redux-saga/effects';
import { userProfileSagas } from '../features/user.profile/root.saga';
import { waitForRehydrate } from './redux.persist.helpers';

/**
 * Compounds all the sagas for to be consumed by the redux middleware.
 */
export function* rootSaga() {
  yield call(waitForRehydrate);
  yield spawn(userProfileSagas);
}
