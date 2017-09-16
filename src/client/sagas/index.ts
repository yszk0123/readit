import { fork, takeEvery, throttle } from 'redux-saga/effects';
import { ActionTypes } from '../interfaces';
import * as Review from './Review';
import * as ReadingLog from './ReadingLog';
import onLoad from './onLoad';
import searchByTitle from './searchByTitle';

const SEARCH_THROTTLE = 800;

export default function* root() {
  try {
    yield takeEvery(ActionTypes.FETCH_READING_LOGS, ReadingLog.fetch);
    yield takeEvery(ActionTypes.CREATE_READING_LOG, ReadingLog.create);
    yield takeEvery(ActionTypes.REMOVE_READING_LOG, ReadingLog.remove);

    yield takeEvery(ActionTypes.FETCH_REVIEWS, Review.fetch);
    yield takeEvery(ActionTypes.CREATE_REVIEW, Review.create);
    yield takeEvery(ActionTypes.UPDATE_REVIEW, Review.update);
    yield takeEvery(ActionTypes.REMOVE_REVIEW, Review.remove);

    yield throttle(
      SEARCH_THROTTLE,
      ActionTypes.SEARCH_BOOK_BY_TITLE,
      searchByTitle,
    );

    yield fork(onLoad);
  } catch (error) {
    console.log('Error in saga!:', error);
  }
}
