// import { Map } from 'immutable';
// import { getToken } from '../../helpers/utility';
// import actions from './actions';

// const initState = new Map({
//   idToken: 'secret token'
// });

// export default function authReducer(
//   state = initState.merge(getToken()),
//   action
// ) {
//   switch (action.type) {
//     case actions.LOGIN_SUCCESS:
//       return state.set('idToken', action.token);
//     case actions.LOGOUT:
//       return initState;
//     default:
//       return state;
//   }
// }
const initialState = {
  isAuthenticated: false,
  user: {},
}
export default function Auth(state = initialState, action) {
  switch (action.type) {

    case "SET_CURRENT_USER":
      var newState = Object.assign({}, state);
      newState.isAuthenticated = true;
      newState.user = action.payload
      return newState;
    // break;
    default:
      return state;
    // break;
  }
}
