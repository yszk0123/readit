import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ID, State, User } from '../interfaces';
import * as actions from '../actions';
import { selectCurrentUser } from '../selectors';
import ReadingLogView from './ReadingLogView';
import CreateReadingLogForm from './CreateReadingLogForm';

const Wrapper = styled.div`padding: 20px;`;

const Button = styled.button`
  padding: 8px 20px;
  font-size: 1.6rem;
`;

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
      <CreateReadingLogForm />
      <Button onClick={onClick}>Load</Button>
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
      dispatch(actions.ReadingLog.fetchAll({}));
    },
  }),
)(App);
