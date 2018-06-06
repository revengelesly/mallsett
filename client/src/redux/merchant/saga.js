import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import authActions from '../auth/actions';
import axios from 'axios';
import { BaseURL } from '../../helpers/constants';
import { clearMerchant } from '../../helpers/utility';


function getMerchantToken() {
  try {
    const merchant = JSON.parse(localStorage.getItem('merchant'));
    return merchant;
  } catch (err) {
    clearMerchant();
    return null;
  }
}

export function getRemoteMerchant(profile) {
  console.log(profile);
  return axios({
    method: 'GET',
    url: `${BaseURL}/api/merchant`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (profile && res.data && res.data.length > 0) {
        return res.data.find(x => x.createdBy === profile._id);
      }
    })
    .catch(err => console.log(err));
}

export function* setMerchant() {
  yield takeEvery(actions.SET_MERCHANT, function*(payload) {
    localStorage.setItem('merchant', JSON.stringify(payload.merchant));
  })
}

export function* getLocalMerchant() {
  yield takeEvery(actions.GET_MERCHANT, function*() {
    const merchant = getMerchantToken();
    console.log(merchant);
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
      if (!getMerchantToken()) {
        const merchant = yield call(getRemoteMerchant, payload.profile);

        if (merchant) {
          yield put({
            type: actions.SET_MERCHANT,
            merchant
          });
        }
      }
    }
  })
}

export default function* rootSaga() {
  yield all([
    fork(getMerchant),
    fork(setMerchant),
    fork(getLocalMerchant)
  ]);
}
