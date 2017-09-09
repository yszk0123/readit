import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ActionTypes, State, User, Book, Review } from '../interfaces';
import { selectCurrentUser, selectReadingLog } from '../selectors';
import BookView from './BookView';
import ReviewView from './ReviewView';

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
`;

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
  padding: 10px;
`;

const Label = styled.label``;

interface OwnProps {
  readingLogId: string;
}

type Props = OwnProps & {
  book: Book | null;
  review: Review | null;
};

export function ReadingLogView({ book, review }: Props) {
  return (
    <Wrapper>
      {book && (
        <BookView
          title={book.title}
          subtitle={book.subtitle}
          author={book.author}
          description={book.description}
          isbn={book.isbn}
          pageCount={book.pageCount}
          thumbnailLink={book.thumbnailLink}
        />
      )}
      {review && <ReviewView review={review} />}
    </Wrapper>
  );
}

export default connect((state: State, { readingLogId }: OwnProps) => {
  const readingLog = selectReadingLog(readingLogId, state);

  return {
    book: readingLog && readingLog.book,
    review: readingLog && readingLog.review,
  };
})(ReadingLogView);
