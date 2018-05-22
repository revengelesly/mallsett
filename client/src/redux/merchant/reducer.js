import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({ merchants: null });

export default function merchantReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_MERCHANTS:
      return state.set('merchants', action.merchants);
    default:
      return state;
  }
}
