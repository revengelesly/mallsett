import { all, takeEvery, put, call, fork, setContext } from 'redux-saga/effects';
import actions from './actions';
import authActions from '../auth/actions';
import axios from 'axios';
import { BaseURL } from '../../helpers/constants';

const getRemoteContents = () => {
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

const getLocalContents = () => {
  try {
    return JSON.parse(localStorage.getItem('contents'));
  } catch (err) {
    localStorage.removeItem('contents');
    return null;
  }
}

export function* getContent() {
  yield takeEvery(actions.GET_CONTENT, function*() {
    let localContents = getLocalContents();

    if (localContents) {
      yield put({
        type: actions.SET_CONTENT,
        contents: localContents
      });
    }

    let contents = yield call(getRemoteContents);
    console.log(contents);

    if (contents) {
      yield put({
        type: actions.SET_CONTENT,
        contents
      });
    }
  });
}

export function* setContents() {
  yield takeEvery(actions.SET_CONTENT, function*(payload) {
    localStorage.setItem('contents', JSON.stringify(payload.contents));
  });
}

export default function* rootSaga() {
  yield all([
    fork(setContents),
    fork(getContent),
  ]);
}
