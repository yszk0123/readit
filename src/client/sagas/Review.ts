import { normalize } from 'normalizr';
import * as schema from './../schema';
import { call, put } from 'redux-saga/effects';
import { patch } from '../apis';
import * as actions from '../actions';

export function* update({
  payload: { reviewId, status, rating },
}: actions.Review.Update) {
  try {
    const data = yield call(patch, `/api/reviews/${reviewId}`, {
      status,
      rating,
    });
    const { entities, result } = normalize(data, schema.review);
    yield put(actions.fetchSuccess({ entities, ui: { reviews: [result] } }));
  } catch (error) {
    yield put(actions.fetchFailure(error));
  }
}
