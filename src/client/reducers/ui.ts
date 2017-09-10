import { ActionTypes, State } from '../interfaces';
import merge from '../utils/merge';
import { Action } from '../actions';

const initialState: State['ui'] = {
  currentUser: null,
  readingLogs: [],
  books: [],
  reviews: [],
  titleInput: '',
};

export default function ui(state: State['ui'] = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS:
      return merge(state, action.payload.ui);
    case ActionTypes.SEARCH_BOOK_BY_TITLE:
      return { ...state, titleInput: action.payload.title };
    default:
      return state;
  }
}
