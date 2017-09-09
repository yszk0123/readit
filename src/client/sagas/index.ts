import { FetchReadingLogsAction, UpdateReviewAction } from './../actions/index';
import { call, take, put, takeEvery } from 'redux-saga/effects';
import { Action, ActionTypes } from '../interfaces';
import { fetch } from '../apis';
import fetchReadingLogs from './fetchReadingLogs';
import updateReview from './updateReview';
import createReadingLog from './createReadingLog';
import removeReadingLog from './removeReadingLog';

export default function* root() {
  try {
    yield takeEvery(ActionTypes.CREATE_READING_LOG, createReadingLog);
    yield takeEvery(ActionTypes.UPDATE_REVIEW, updateReview);
    yield takeEvery(ActionTypes.FETCH_READING_LOGS, fetchReadingLogs);
    yield takeEvery(ActionTypes.REMOVE_READING_LOG, removeReadingLog);
  } catch (error) {
    console.log('Error in saga!:', error);
  }
}
