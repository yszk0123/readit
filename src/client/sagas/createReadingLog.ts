import { normalize } from 'normalizr';
import * as schema from './../schema';
import { call, put } from 'redux-saga/effects';
import { ActionTypes, ReviewStatus } from '../interfaces';
import { post, getBookData } from '../apis';
import { CreateReadingLogAction } from '../actions';

export default function* createReadingLog({
  payload: { title },
}: CreateReadingLogAction) {
  try {
    const bookData = yield call(getBookData, title);
    const book = yield call(post, '/api/books', bookData);
    const review = yield call(post, '/api/reviews', {
      status: ReviewStatus.PLAN_TO_BUY,
      rating: 0,
    });

    const data = yield call(post, '/api/readingLogs', {
      id: book.id,
      bookId: book.id,
      reviewId: review.id,
    });
    data.book = book;
    data.review = review;

    const { entities, result } = normalize(data, schema.readingLog);
    yield put({
      type: ActionTypes.FETCH_SUCCESS,
      payload: { entities, ui: { readingLogs: [result] } },
    });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_FAILURE, payload: error });
  }
}
