import { Action, ActionTypes, State } from '../interfaces';
import merge from '../utils/merge';

const initialState: State['ui'] = {
  currentUser: null,
  readingLogs: [],
};

export default function ui(state: State['ui'] = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS:
      return merge(state, action.payload.ui);
    default:
      return state;
  }
}
