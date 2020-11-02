import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const IndexAction = {
  increment: actionCreator('INCREMENT'),
  incrementDelay: actionCreator.async<number, Error>('INCREMENT_DELAY'),
  set: actionCreator<number>('SET_COUNT'),
};
