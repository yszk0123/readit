import { put, takeEvery } from 'redux-saga/effects';

enum ActionTypes {
  ChangeName = 'ChangeName',
}

interface ChangeNameAction {
  type: ActionTypes.ChangeName;
  payload: { name: string };
}

type Action = ChangeNameAction;

function changeName(name: string): ChangeNameAction {
  return { type: ActionTypes.ChangeName, payload: { name } };
}

function* helloSaga(action: any) {
  try {
    yield put(changeName('taro'));
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
