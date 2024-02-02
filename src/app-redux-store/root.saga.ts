import { spawn } from 'redux-saga/effects';
import { userProfileSagas } from '../features/user.profile/root.saga';

export function* rootSaga() {
  // yield call(waitForRehydrate);
  yield spawn(userProfileSagas);

}
