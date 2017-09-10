import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ID, State, User } from '../interfaces';
import * as actions from '../actions';
import { selectCurrentUser } from '../selectors';
import ReviewItem from './ReviewItem';
import CreateReviewForm from './CreateReviewForm';

const Wrapper = styled.div`padding: 20px;`;

const Button = styled.button`
  padding: 8px 20px;
  font-size: 1.6rem;
`;

const UserInfo = styled.div`font-size: 1.6rem;`;

interface Props {
  user: User | null;
  reviewIds: ID[];
  onClick: React.ReactEventHandler<HTMLElement>;
}

export function App({ user, reviewIds, onClick }: Props) {
  return (
    <Wrapper>
      {user && <UserInfo>Hello, {user.nickname}!</UserInfo>}
      <CreateReviewForm />
      <Button onClick={onClick}>Load</Button>
      {reviewIds.map(id => <ReviewItem key={id} reviewId={id} />)}
    </Wrapper>
  );
}

export default connect(
  (state: State) => ({
    user: selectCurrentUser(state),
    reviewIds: state.ui.reviews,
  }),
  dispatch => ({
    onClick: () => {
      dispatch(actions.Review.fetchAll());
    },
  }),
)(App);
