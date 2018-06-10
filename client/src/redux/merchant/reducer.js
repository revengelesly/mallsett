import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({ merchant: null });

export default function merchantReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_MERCHANT:
    case action.GET_ASSOCIATE:
      return state.set('merchant', action.merchant);
    default:
      return state;
  }
}
