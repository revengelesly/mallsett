import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({ idToken: null, profile: null });

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return state.set('idToken', action.token).set('profile', action.profile);
    case actions.LOGOUT:
      return initState;
    case actions.LOGIN_ERROR:
      return state.set('idToken', actions.LOGIN_ERROR);
    default:
      return state;
  }
}
