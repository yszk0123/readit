import { ActionTypes, State } from '../interfaces';

export type FetchAction = FetchSuccessAction | FetchFailureAction;

type FetchableState = Partial<{
  entities: Partial<State['entities']>;
  ui: Partial<State['ui']>;
}>;

export interface FetchSuccessAction {
  type: ActionTypes.FETCH_SUCCESS;
  payload: FetchableState;
}

export function fetchSuccess(payload: FetchableState): FetchSuccessAction {
  return { type: ActionTypes.FETCH_SUCCESS, payload };
}

export interface FetchFailureAction {
  type: ActionTypes.FETCH_FAILURE;
  payload: Error;
}

export function fetchFailure(payload: Error): FetchFailureAction {
  return { type: ActionTypes.FETCH_FAILURE, payload };
}
