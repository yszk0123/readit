import { ActionTypes, State } from '../interfaces';
import { merge } from '../utils';
import { Action } from '../actions';

const initialState: State['ui'] = {
  currentUser: null,
  readingLogs: [],
  books: [],
  reviews: [],
  searching: false,
  titleInput: '',
  candidates: [],
};

export default function ui(
  state: State['ui'] = initialState,
  action: Action,
): State['ui'] {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS:
      return merge(state, action.payload.ui);
    case ActionTypes.SEARCH_BOOK_BY_TITLE:
      return { ...state, searching: true, titleInput: action.payload.title };
    case ActionTypes.SEARCH_BOOK_BY_TITLE_SUCCESS:
      return { ...state, searching: false, candidates: action.payload };
    case ActionTypes.CLEAR_SEARCH:
      return { ...state, searching: false, titleInput: '', candidates: [] };
    default:
      return state;
  }
}
