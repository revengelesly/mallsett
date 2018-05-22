import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({ idToken: null });

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return state.set('idToken', action.token).set('profile', action.profile);
    case actions.LOGOUT:
      return initState;
    case actions.LOGIN_ERROR:
      return state.set('idToken', actions.LOGIN_ERROR);
    case actions.UPDATE_PROFILE:
      return state.set('profile', action.profile)
    default:
      return state;
  }
}
