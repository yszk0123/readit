import { ActionTypes, BookData } from '../interfaces';

export type SearchBookByTitleAction =
  | SearchBookByTitle
  | SearchBookByTitleSuccess
  | SearchBookByTitleFailure
  | ResetSearch;

export interface SearchBookByTitle {
  type: ActionTypes.SEARCH_BOOK_BY_TITLE;
  payload: { title: string };
}

export function searchBookByTitle(title: string): SearchBookByTitleAction {
  return { type: ActionTypes.SEARCH_BOOK_BY_TITLE, payload: { title } };
}

export interface SearchBookByTitleSuccess {
  type: ActionTypes.SEARCH_BOOK_BY_TITLE_SUCCESS;
  payload: BookData[];
}

export function searchBookByTitleSuccess(
  candidates: BookData[],
): SearchBookByTitleSuccess {
  return {
    type: ActionTypes.SEARCH_BOOK_BY_TITLE_SUCCESS,
    payload: candidates,
  };
}

export interface SearchBookByTitleFailure {
  type: ActionTypes.SEARCH_BOOK_BY_TITLE_FAILURE;
  payload: Error;
}

export function searchBookByTitleFailure(
  error: Error,
): SearchBookByTitleFailure {
  return { type: ActionTypes.SEARCH_BOOK_BY_TITLE_FAILURE, payload: error };
}

export interface ClearSearch {
  type: ActionTypes.CLEAR_SEARCH;
}

export function clearSearch(): ClearSearch {
  return { type: ActionTypes.CLEAR_SEARCH };
}
