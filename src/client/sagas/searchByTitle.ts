import { call, put } from 'redux-saga/effects';
import * as apis from '../apis';
import * as actions from '../actions';
import { transformFromGoogleBookSearchResult } from '../utils';

const MIN_LENGTH = 2;

export default function* searchByTitle({
  payload: { title },
}: actions.Search.SearchBookByTitle) {
  if (!title || title.length <= MIN_LENGTH) {
    return;
  }

  try {
    const uri = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      title,
    )}`;
    const result = yield call(apis.fetch, uri);
    const candidates = result.items.map(transformFromGoogleBookSearchResult);

    yield put(actions.Search.searchBookByTitleSuccess(candidates));
  } catch (error) {
    yield put(actions.Search.searchBookByTitleFailure(error));
  }
}
