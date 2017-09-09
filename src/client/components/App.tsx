import * as React from 'react';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import styled from 'styled-components';
import { ActionTypes, State, User, Book, ReadingLog } from '../interfaces';
import { fetchBook } from '../actions';
import { selectBook, selectUser, selectReadingLog } from '../selectors';
import ReadingLogView from './ReadingLogView';

const Wrapper = styled.div`padding: 20px;`;

const UserInfo = styled.div`font-size: 1.6rem;`;

const BookInfo = styled.div`
  display: flex;
  font-size: 1.6rem;
`;

const Cover = styled.div`
  padding: 1rem;
  width: 128px;
  height: 128px;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Label = styled.label``;

interface Props {
  user: User | null;
  book: Book | null;
  readingLog: ReadingLog | null;
  onClick: React.ReactEventHandler<HTMLElement>;
}

export function App({ book, readingLog, user, onClick }: Props) {
  return (
    <Wrapper onClick={onClick}>
      {user && <UserInfo>Hello, {user.nickname}!</UserInfo>}
      {book && (
        <BookInfo>
          <Cover>
            <img alt="thumbnail" src={book.thumbnailLink} />
          </Cover>
          <TextInfo>
            <Label>Title: {book.title}</Label>
            <Label>
              Author: <span>{book.author}</span>
            </Label>
            <Label>
              Description: <span>{book.description}</span>
            </Label>
            <Label>
              ISBN: <span>{book.isbn || '---'}</span>
            </Label>
            <Label>
              PageCount: <span>{book.pageCount}</span>
            </Label>
          </TextInfo>
        </BookInfo>
      )}
      {readingLog && <ReadingLogView status={readingLog.status} />}
    </Wrapper>
  );
}

export default connect(
  (state: State) => ({
    user: selectUser(state),
    book: selectBook(state, '123'),
    readingLog: selectReadingLog(state, '1'),
  }),
  dispatch => ({
    onClick: () => {
      dispatch(fetchBook('123'));
    },
  }),
)(App);
