/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, applyMiddleware, Store, combineReducers } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import { IndexState, indexReducer } from './reducer';
import { rootSaga } from './saga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export type AppState = {
  indexState: IndexState;
};

const bindMiddleware: any = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore: MakeStore<AppState> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers<AppState>({
      indexState: indexReducer,
    }),
    bindMiddleware([sagaMiddleware]),
  );

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<AppState>(makeStore);
