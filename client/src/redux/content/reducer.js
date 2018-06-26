import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({ contents: null });

export default function contentReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_CONTENT:
      return state.set('contents', action.contents);
    default:
      return state;
  }
}
