import { call, put } from 'redux-saga/effects';
import { ActionTypes } from '../interfaces';
import { remove } from '../apis';
import { RemoveReadingLogAction } from '../actions';

export default function* removeReadingLog({
  payload: { readingLogId },
}: RemoveReadingLogAction) {
  try {
    yield call(remove, `/api/readingLogs/${readingLogId}`);
    yield put({
      type: ActionTypes.REMOVE_READING_LOG_SUCCESS,
      payload: { readingLogId },
    });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_FAILURE, payload: error });
  }
}
