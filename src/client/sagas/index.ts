import { call, take, put, takeEvery } from 'redux-saga/effects';
import { Action, ActionTypes } from '../interfaces';
import { fetch } from '../apis';
import { FetchBookAction } from '../actions';

function* fetchBook({ payload: { bookId } }: FetchBookAction) {
  try {
    const book = yield call(fetch, `/api/books/${bookId}`);
    yield put({ type: ActionTypes.FETCH_BOOK_SUCCESS, payload: book });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_BOOK_FAILURE, payload: error });
  }
}

export default function* root() {
  try {
    yield takeEvery(ActionTypes.FETCH_BOOK, fetchBook);
  } catch (error) {
    console.log('Error in saga!:', error);
  }
}
