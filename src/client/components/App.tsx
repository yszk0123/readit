import * as React from 'react';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import styled from 'styled-components';
import { ID, ActionTypes, State, User, ReadingLog } from '../interfaces';
import { fetchReadingLogs } from '../actions';
import { selectCurrentUser, selectReadingLog } from '../selectors';
import ReadingLogView from './ReadingLogView';

const Wrapper = styled.div`padding: 20px;`;

const UserInfo = styled.div`font-size: 1.6rem;`;

interface Props {
  user: User | null;
  readingLogIds: ID[];
  onClick: React.ReactEventHandler<HTMLElement>;
}

export function App({ user, readingLogIds, onClick }: Props) {
  return (
    <Wrapper>
      {user && <UserInfo>Hello, {user.nickname}!</UserInfo>}
      <button onClick={onClick}>Load</button>
      {readingLogIds.map(id => <ReadingLogView key={id} readingLogId={id} />)}
    </Wrapper>
  );
}

export default connect(
  (state: State) => ({
    user: selectCurrentUser(state),
    readingLogIds: state.ui.readingLogs,
  }),
  dispatch => ({
    onClick: () => {
      dispatch(fetchReadingLogs({}));
    },
  }),
)(App);
