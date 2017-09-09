import { normalize } from 'normalizr';
import * as schema from './../schema';
import { call, take, put, takeEvery } from 'redux-saga/effects';
import { Action, ActionTypes } from '../interfaces';
import { fetch } from '../apis';
import { FetchReadingLogsAction } from '../actions';

export default function* fetchReadingLogs({
  payload: { limit },
}: FetchReadingLogsAction) {
  try {
    const data = yield call(fetch, `/api/readingLogs`, {
      params: { limit, _expand: ['book', 'review'] },
    });
    const { entities, result } = normalize(data, [schema.readingLog]);
    yield put({
      type: ActionTypes.FETCH_SUCCESS,
      payload: { entities, ui: { readingLogs: result } },
    });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_FAILURE, payload: error });
  }
}
