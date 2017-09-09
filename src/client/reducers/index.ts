import { ReadingLog } from './../interfaces';
import { combineReducers } from 'redux';
import { Action, State, User, Book, ActionTypes } from '../interfaces';

function user(
  state: User = { id: '1', nickname: 'foobar', email: 'hoge@gmail.com' },
  action: Action,
) {
  switch (action.type) {
    default:
      return state;
  }
}

function book(state: Book | null = null, action: Action) {
  switch (action.type) {
    case ActionTypes.FETCH_BOOK_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

function books(state: Record<string, Book> = {}, action: Action) {
  switch (action.type) {
    case ActionTypes.FETCH_BOOK_SUCCESS:
      return {
        ...state,
        [action.payload.id]: book(state[action.payload.id], action),
      };
    default:
      return state;
  }
}

function readingLog(state: ReadingLog | null = null, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

function readingLogs(state: Record<string, ReadingLog> = {}, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  entities: combineReducers({
    user,
    books,
    readingLogs,
  }),
});
