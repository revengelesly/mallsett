import actions from './actions';

const initState = { newFile: null, loading: false, error: null };

export default function documentReducer(state = initState, action) {
  switch (action.type) {
    case actions.ADD_FILE:
      return { ...state, loading: true, error: null };
    case actions.ADD_FILE_SUCCESS:
      return { ...state, loading: false, newFile: action[1], error: null };
    case actions.ADD_FILE_FAILED:
      return { ...state, loading: false, error: action[1] };
    default:
      return state;
  }
}
