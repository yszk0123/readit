import { ID, Action, ActionTypes } from '../interfaces';

export interface FetchReadingLogsPayload {
  limit?: number;
}

export interface FetchReadingLogsAction extends Action {
  type: ActionTypes.FETCH_READING_LOGS;
  payload: FetchReadingLogsPayload;
}

export function fetchReadingLogs(
  payload: FetchReadingLogsPayload,
): FetchReadingLogsAction {
  return { type: ActionTypes.FETCH_READING_LOGS, payload };
}

export type CreateReadingLogPayload = {
  title: string;
};

export interface CreateReadingLogAction {
  type: ActionTypes.CREATE_READING_LOG;
  payload: CreateReadingLogPayload;
}

export function createReadingLog(
  payload: CreateReadingLogPayload,
): CreateReadingLogAction {
  return { type: ActionTypes.CREATE_READING_LOG, payload };
}

export interface RemoveReadingLogAction {
  type: ActionTypes.REMOVE_READING_LOG;
  payload: { readingLogId: ID };
}

export function removeReadingLog(readingLogId: ID): RemoveReadingLogAction {
  return { type: ActionTypes.REMOVE_READING_LOG, payload: { readingLogId } };
}
