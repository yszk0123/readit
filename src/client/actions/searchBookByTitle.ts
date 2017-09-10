import { ActionTypes } from '../interfaces';

export interface SearchBookByTitleAction {
  type: ActionTypes.SEARCH_BOOK_BY_TITLE;
  payload: { title: string };
}

export function searchBookByTitle(title: string): SearchBookByTitleAction {
  return { type: ActionTypes.SEARCH_BOOK_BY_TITLE, payload: { title } };
}
