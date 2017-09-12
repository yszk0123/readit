import { ActionTypes } from '../interfaces';

export type UserAction = Fetch | FetchSuccess | FetchFailure;

export interface Fetch {
  type: ActionTypes.FETCH_USER;
}

export function fetch(): Fetch {
  return { type: ActionTypes.FETCH_USER };
}

export interface FetchSuccess {
  type: ActionTypes.FETCH_USER_SUCCESS;
}

export function fetchSuccess(): FetchSuccess {
  return { type: ActionTypes.FETCH_USER_SUCCESS };
}

export interface FetchFailure {
  type: ActionTypes.FETCH_USER_FAILURE;
}

export function fetchFailure(): FetchFailure {
  return { type: ActionTypes.FETCH_USER_FAILURE };
}
