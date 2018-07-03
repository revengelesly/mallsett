import { all, takeEvery, put, call, fork, take } from 'redux-saga/effects';
import { channel } from 'redux-saga'
import actions from './actions';
import authActions from '../auth/actions';
import { clearMerchant } from '../../helpers/utility';
import { getSuggestionsAPI, getRemoteMerchant } from './api';
import { newConnection } from '../../socketClient';

const connectionChannel = channel();
function getMerchantToken() {
  try {
    const merchant = JSON.parse(localStorage.getItem('merchant'));
    return merchant;
  } catch (err) {
    clearMerchant();
    return null;
  }
}

export function* setMerchant() {
  yield takeEvery(actions.SET_MERCHANT, function*(payload) {
    localStorage.setItem('merchant', JSON.stringify(payload.merchant));
  });
}

export function* getLocalMerchant() {
  yield takeEvery(actions.GET_MERCHANT, function*() {
    const merchant = getMerchantToken();
    if (merchant) {
      yield put({
        type: actions.SET_MERCHANT,
        merchant
      });
    }
  });
}

export function* getMerchant() {
  yield takeEvery(authActions.LOGIN_SUCCESS, function*(payload) {
    if (payload && payload.profile) {
      const merchant = yield call(getRemoteMerchant, payload);

      if (merchant) {
        newConnection(merchant._id, data => connectionChannel.put({
            type: actions.SET_MERCHANT,
            merchant: data
          })
        );

        yield put({
          type: actions.SET_MERCHANT,
          merchant
        });
      }
    }
  });
}

export function* watchConnectionChannel() {
  while (true) {
    const action = yield take(connectionChannel)
    yield put(action)
  }
}

export function* getSuggestions() {
  yield takeEvery(authActions.LOGIN_SUCCESS, function*(payload) {
    if (payload && payload.profile) {
      const suggestions = yield call(getSuggestionsAPI, payload.token);

      if (suggestions) {
        yield put({
          type: actions.SET_SUGGESTIONS,
          suggestions
        });
      }
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getMerchant),
    fork(setMerchant),
    fork(getLocalMerchant),
    fork(getSuggestions),
    fork(watchConnectionChannel)
  ]);
}
