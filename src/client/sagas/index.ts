import { takeEvery } from 'redux-saga/effects';
import { ActionTypes } from '../interfaces';
import * as Review from './Review';
import * as ReadingLog from './ReadingLog';

export default function* root() {
  try {
    yield takeEvery(ActionTypes.FETCH_READING_LOGS, ReadingLog.fetch);
    yield takeEvery(ActionTypes.CREATE_READING_LOG, ReadingLog.create);
    yield takeEvery(ActionTypes.REMOVE_READING_LOG, ReadingLog.remove);
    yield takeEvery(ActionTypes.UPDATE_REVIEW, Review.update);
  } catch (error) {
    console.log('Error in saga!:', error);
  }
}
