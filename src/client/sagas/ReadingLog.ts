import { normalize } from 'normalizr';
import * as schema from './../schema';
import { call, put } from 'redux-saga/effects';
import { ReviewStatus } from '../interfaces';
import * as apis from '../apis';
import * as actions from '../actions';

export function* fetch({ payload: { limit } }: actions.ReadingLog.FetchAll) {
  try {
    const data = yield call(apis.fetch, `/api/readingLogs`, {
      params: { limit, _expand: ['book', 'review'] },
    });
    const { entities, result } = normalize(data, [schema.readingLog]);
    yield put(actions.fetchSuccess({ entities, ui: { readingLogs: result } }));
  } catch (error) {
    yield put(actions.fetchFailure(error));
  }
}

export function* create({ payload: { title } }: actions.ReadingLog.Create) {
  try {
    const bookData = yield call(apis.getBookData, title);
    const book = yield call(apis.post, '/api/books', bookData);
    const review = yield call(apis.post, '/api/reviews', {
      status: ReviewStatus.PLAN_TO_BUY,
      rating: 0,
    });

    const data = yield call(apis.post, '/api/readingLogs', {
      id: book.id,
      bookId: book.id,
      reviewId: review.id,
    });
    data.book = book;
    data.review = review;

    const { entities, result } = normalize(data, schema.readingLog);
    yield put(
      actions.fetchSuccess({ entities, ui: { readingLogs: [result] } }),
    );
  } catch (error) {
    yield put(actions.fetchFailure(error));
  }
}

export function* remove({
  payload: { readingLogId },
}: actions.ReadingLog.Remove) {
  try {
    yield call(apis.remove, `/api/readingLogs/${readingLogId}`);
    yield put(actions.ReadingLog.removeSuccess(readingLogId));
  } catch (error) {
    yield put(actions.fetchFailure(error));
  }
}
