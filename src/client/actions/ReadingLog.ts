import { ID, Action, ActionTypes } from '../interfaces';

export type ReadingLogAction = FetchAll | Create | Remove;

interface FetchAllPayload {
  limit?: number;
}

export interface FetchAll extends Action {
  type: ActionTypes.FETCH_READING_LOGS;
  payload: FetchAllPayload;
}

export function fetchAll(payload: FetchAllPayload): FetchAll {
  return { type: ActionTypes.FETCH_READING_LOGS, payload };
}

interface CreatePayload {
  title: string;
}

export interface Create {
  type: ActionTypes.CREATE_READING_LOG;
  payload: CreatePayload;
}

export function create(payload: CreatePayload): Create {
  return { type: ActionTypes.CREATE_READING_LOG, payload };
}

export interface Remove {
  type: ActionTypes.REMOVE_READING_LOG;
  payload: { readingLogId: ID };
}

export function remove(readingLogId: ID): Remove {
  return { type: ActionTypes.REMOVE_READING_LOG, payload: { readingLogId } };
}

export interface RemoveSuccess {
  type: ActionTypes.REMOVE_READING_LOG_SUCCESS;
  payload: { readingLogId: ID };
}

export function removeSuccess(readingLogId: ID): RemoveSuccess {
  return {
    type: ActionTypes.REMOVE_READING_LOG_SUCCESS,
    payload: { readingLogId },
  };
}
