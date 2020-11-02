import { all, call, put, takeEvery, fork, select } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { SagaIterator } from 'redux-saga';
import { IndexAction } from './action';
import { AppState } from './store';

const wait = async (milliseconds: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const fivePlusDelay = (count: number): number => {
  return count + 5;
};

function* incrementDelayWorker() {
  try {
    yield call(wait, 3000);
    const appState: AppState = yield select();
    const result = yield call(fivePlusDelay, appState.indexState.count);
    yield put(IndexAction.set(result));
  } catch (error) {
    throw Error(error);
  }
}

const bindedIncrementDelay = bindAsyncAction(IndexAction.incrementDelay, { skipStartedAction: true })(
  incrementDelayWorker,
);

function* fivePlusHandler(): SagaIterator {
  yield takeEvery(IndexAction.incrementDelay.started, function* ({ payload }) {
    yield call(bindedIncrementDelay, payload);
  });
}

export function* rootSaga(): SagaIterator {
  yield all([fork(fivePlusHandler)]);
}
