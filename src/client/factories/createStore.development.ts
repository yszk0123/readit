import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import saga from '../sagas';

export default function finalCreateStore(initialState = {}, history: any): any {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware, logger];

  let store = (createStore as any)(
    reducer,
    compose(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(saga);

  return store;
}
