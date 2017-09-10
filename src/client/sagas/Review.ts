import { normalize } from 'normalizr';
import * as schema from './../schema';
import { call, put } from 'redux-saga/effects';
import { ReviewStatus } from '../interfaces';
import * as apis from '../apis';
import * as actions from '../actions';

export function* fetch({ payload: { limit } }: actions.Review.FetchAll) {
  try {
    const data = yield call(apis.fetch, `/api/reviews`, {
      params: { limit, _expand: ['book'] },
    });
    const { entities, result } = normalize(data, [schema.review]);
    yield put(actions.fetchSuccess({ entities, ui: { reviews: result } }));
  } catch (error) {
    yield put(actions.fetchFailure(error));
  }
}

export function* create({ payload: { title } }: actions.Review.Create) {
  try {
    const bookData = yield call(apis.getBookData, title);
    const book = yield call(apis.post, '/api/books', bookData);

    const review = yield call(apis.post, '/api/reviews', {
      id: book.id,
      bookId: book.id,
      status: ReviewStatus.PLAN_TO_BUY,
      rating: 0,
    });
    review.book = book;

    const { entities, result } = normalize(review, schema.review);
    yield put(actions.fetchSuccess({ entities, ui: { reviews: [result] } }));
  } catch (error) {
    yield put(actions.fetchFailure(error));
  }
}

export function* update({
  payload: { reviewId, status, rating },
}: actions.Review.Update) {
  try {
    const data = yield call(apis.patch, `/api/reviews/${reviewId}`, {
      status,
      rating,
    });
    const { entities, result } = normalize(data, schema.review);
    yield put(actions.fetchSuccess({ entities, ui: { reviews: [result] } }));
  } catch (error) {
    yield put(actions.fetchFailure(error));
  }
}

export function* remove({ payload: { reviewId } }: actions.Review.Remove) {
  try {
    yield call(apis.remove, `/api/reviews/${reviewId}`);
    yield put(actions.Review.removeSuccess(reviewId));
  } catch (error) {
    yield put(actions.fetchFailure(error));
  }
}
