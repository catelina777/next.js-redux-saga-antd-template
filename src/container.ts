import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IndexAction } from './action';
import { IndexState } from './reducer';
import { AppState } from './store';
import IndexPage from '../components/pages/index';

export type IndexActions = {
  pushButton: () => Action<string>;
  pushButtonDelay: (count: number) => Action<string>;
  set: (count: number) => Action<string>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>): IndexActions => ({
  pushButton: (): Action<string> => dispatch(IndexAction.increment()),
  pushButtonDelay: (count: number): Action<string> => dispatch(IndexAction.incrementDelay.started(count)),
  set: (count: number): Action<string> => dispatch(IndexAction.set(count)),
});

const mapStateToProps = (appState: AppState): IndexState => {
  return {
    ...appState.indexState,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
