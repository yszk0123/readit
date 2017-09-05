import { put, takeEvery } from 'redux-saga/effects';

function* helloSaga(action: any) {
  try {
    yield put({ type: 'CHANGE_NAME', payload: { name: 'taro' } });
  } catch (error) {
    yield put({ type: 'FAIL' });
  }
}

export default function* rootSaga() {
  try {
    yield takeEvery('HELLO', helloSaga);
  } catch (error) {
    console.log('Error in saga!:', error);
  }
}
