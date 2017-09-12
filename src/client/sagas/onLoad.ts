import { call, put } from 'redux-saga/effects';
import * as apis from '../apis';
import * as actions from '../actions';

function redirect(path: string) {
  window.location.href = path;
}

export default function* onLoad() {
  try {
    const data = yield call(apis.fetch, `/api/currentUser`);
    if (!data) {
      redirect('/login');
    }

    yield put(actions.Review.fetchAll());
  } catch (error) {
    redirect('/login');
  }
}
