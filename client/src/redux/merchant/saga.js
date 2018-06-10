import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import authActions from '../auth/actions';
import axios from 'axios';
import { BaseURL } from '../../helpers/constants';
import { clearMerchant } from '../../helpers/utility';
import { getAssociatesInfo } from './api';

function getMerchantToken() {
  try {
    const merchant = JSON.parse(localStorage.getItem('merchant'));
    return merchant;
  } catch (err) {
    clearMerchant();
    return null;
  }
}

export function getRemoteMerchant(payload) {
  console.log(payload);
  return axios({
    method: 'GET',
    url: `${BaseURL}/api/merchant/${payload.profile._id}`,
    headers: {
      Authorization: payload.token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => console.log(err));
}

export function* setMerchant() {
  yield takeEvery(actions.SET_MERCHANT, function*(payload) {
    localStorage.setItem('merchant', JSON.stringify(payload.merchant));
  });
}

// export function* setAssociates() {
//   yield takeEvery(actions.SET_MERCHANT, function* (payload) {
//     if (payload.merchant) {
//       let merchant = yield call(getAssociatesInfo, payload.merchant);

//       yield put({
//         type: actions.SET_ASSOCIATES,
//         merchant
//       });
//     }
//   })
// }

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

export default function* rootSaga() {
  yield all([
    fork(getMerchant),
    fork(setMerchant),
    //fork(setAssociates),
    fork(getLocalMerchant)
  ]);
}
