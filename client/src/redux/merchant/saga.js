import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import authActions from '../auth/actions';
import { clearMerchant } from '../../helpers/utility';
import { getSuggestionsAPI, getRemoteMerchant } from './api';

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
        yield put({
          type: actions.SET_MERCHANT,
          merchant
        });
      }
    }
  });
}

export function* getSuggestions() {
  yield takeEvery(authActions.LOGIN_SUCCESS, function*(payload) {
    if (payload && payload.profile) {
      console.log('vô');
      const suggestions = yield call(getSuggestionsAPI, payload.token);
      console.log(suggestions);
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
    fork(getSuggestions)
  ]);
}
