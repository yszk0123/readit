import { Action, ActionTypes } from '../interfaces';

export interface FetchBookAction extends Action {
  type: ActionTypes.FETCH_BOOK;
  payload: { bookId: string };
}

export function fetchBook(bookId: string): FetchBookAction {
  return { type: ActionTypes.FETCH_BOOK, payload: { bookId: '123' } };
}
