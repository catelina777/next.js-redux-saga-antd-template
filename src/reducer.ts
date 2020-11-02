import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { IndexAction } from './action';

export type IndexState = {
  count: number;
};

const initialTopState: IndexState = {
  count: 1,
};

export const indexReducer = reducerWithInitialState(initialTopState)
  .case(IndexAction.increment, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  })
  .case(IndexAction.set, (state, payload) => {
    return {
      ...state,
      count: payload,
    };
  });
