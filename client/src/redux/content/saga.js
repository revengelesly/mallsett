import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import authActions from '../auth/actions';
import axios from 'axios';
import { BaseURL } from '../../helpers/constants';

const getContent = () => {
  return axios({
    method: 'GET',
    url: `${BaseURL}/api/admins/contents`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data[0];
  })
  .catch(err => console.log(err));
}

export function* setContent() {
  yield takeEvery(authActions.LOGIN_SUCCESS, function*(payload) {
    let contents = yield call(getContent);
    console.log(contents);
    yield put({
      type: actions.SET_CONTENT,
      contents
    });
  });
}

export default function* rootSaga() {
  yield all([
    fork(setContent),
  ]);
}
