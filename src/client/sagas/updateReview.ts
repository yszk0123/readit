import { normalize } from 'normalizr';
import * as schema from './../schema';
import { call, take, put, takeEvery } from 'redux-saga/effects';
import { Action, ActionTypes } from '../interfaces';
import { patch } from '../apis';
import { UpdateReviewAction } from '../actions';

export default function* updateReview({
  payload: { reviewId, status, rating },
}: UpdateReviewAction) {
  try {
    const data = yield call(patch, `/api/reviews/${reviewId}`, {
      status,
      rating,
    });
    const { entities, result } = normalize(data, schema.review);
    yield put({
      type: ActionTypes.FETCH_SUCCESS,
      payload: { entities, ui: { reviews: [result] } },
    });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_FAILURE, payload: error });
  }
}
