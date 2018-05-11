import axios from 'axios';
import actions from './actions';

export const addFile = file => async (dispatch) => {
  let res;
  try {
    res = await axios.post('http://localhost:5000/api/users/register', file);
    console.log('data', res.data);
    dispatch(actions.addFile(res.data));
  } catch (e) {
    dispatch(actions.addFileFailed(e));
    console.log('error', e);
  }
}
