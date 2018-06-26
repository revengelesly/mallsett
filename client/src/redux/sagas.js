import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import merchantSagas from './merchant/saga';
import contentSagas from './content/saga';
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    merchantSagas(),
    contentSagas()
  ]);
}
