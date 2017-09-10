import { ActionTypes } from '../interfaces';

export interface NoopAction {
  type: ActionTypes.NOOP;
  payload: {};
}

export function noop(): NoopAction {
  return { type: ActionTypes.NOOP, payload: {} };
}
