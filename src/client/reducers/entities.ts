import { Action, State, ActionTypes } from '../interfaces';
import merge from '../utils/merge';

const initialState: State['entities'] = {
  users: {},
  books: {},
  reviews: {},
  readingLogs: {},
};

export default function entities(
  state: State['entities'] = initialState,
  action: Action,
) {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS:
      return merge(state, action.payload.entities);
    default:
      return state;
  }
}
