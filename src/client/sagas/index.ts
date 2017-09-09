import { FetchReadingLogsAction, UpdateReviewAction } from './../actions/index';
import { call, take, put, takeEvery } from 'redux-saga/effects';
import { Action, ActionTypes } from '../interfaces';
import { fetch } from '../apis';
import fetchReadingLogs from './fetchReadingLogs';
import updateReview from './updateReview';

export default function* root() {
  try {
    yield takeEvery(ActionTypes.UPDATE_REVIEW, updateReview);
    yield takeEvery(ActionTypes.FETCH_READING_LOGS, fetchReadingLogs);
  } catch (error) {
    console.log('Error in saga!:', error);
  }
}
