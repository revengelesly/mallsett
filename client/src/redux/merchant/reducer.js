import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({ merchant: null });

export default function merchantReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_MERCHANT:
    case actions.GET_ASSOCIATE:
      return state.set('merchant', action.merchant);
    case actions.SET_SUGGESTIONS:
      return state.set('suggestions', action.suggestions)
    default:
      return state;
  }
}
