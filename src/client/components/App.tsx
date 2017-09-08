import * as React from 'react';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import { ActionTypes, State, User, Book } from '../interfaces';
import { fetchBook } from '../actions';
import { getBook, getUser } from '../selectors';

interface Props {
  user: User | null;
  book: Book | null;
  onClick: React.ReactEventHandler<HTMLElement>;
}

export function App({ book, user, onClick }: Props) {
  return (
    <div onClick={onClick}>
      {user && <span>Hello, {user.nickname}!</span>}
      {book && <h1>{book.title}</h1>}
    </div>
  );
}

export default connect(
  (state: State) => ({
    user: getUser(state),
    book: getBook(state, '123'),
  }),
  dispatch => ({
    onClick: () => {
      dispatch(fetchBook('123'));
    },
  }),
)(App);
