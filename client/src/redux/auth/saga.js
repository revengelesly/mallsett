import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getToken, getProfile, clearToken } from '../../helpers/utility';
import actions from './actions';
import { login, getProfileServer } from './api';
import axios from 'axios';

const fakeApiCall = false; // auth0 or express JWT

export function* loginRequest() {
  yield takeEvery('LOGIN_REQUEST', function*(action = {}) {
    if (fakeApiCall || Object.keys(action).length === 0) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: 'secret token',
        profile: 'Profile'
      });
    } else {
      const user = yield call(login, action.user);
      if (user && user.success) {
        const profile = yield call(getProfileServer, user);
        console.log(profile);
        yield put({
          type: actions.LOGIN_SUCCESS,
          token: user.token,
          profile: profile
        });
      } else {
        yield put({
          type: actions.LOGIN_ERROR
        });
      }
    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    yield localStorage.setItem('id_token', payload.token);
    yield localStorage.setItem('profile', JSON.stringify(payload.profile));
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() { return false; });
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    console.log('logout')
    clearToken();
    yield put(push('/'));
  });
}
export function* checkAuthorization() {
  yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
    const token = getToken().get('idToken');
    const profile = getProfile().get('profile');
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token,
        profile
      });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout)
  ]);
}
