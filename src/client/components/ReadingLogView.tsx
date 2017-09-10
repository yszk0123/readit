import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { State, Book, Review } from '../interfaces';
import { selectReadingLog } from '../selectors';
import BookView from './BookView';
import ReviewView from './ReviewView';
import { removeReadingLog } from '../actions';

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
`;

interface OwnProps {
  readingLogId: string;
}

type Props = OwnProps & {
  book: Book | null;
  review: Review | null;
  removed: boolean;
  onRemove(): void;
};

export function ReadingLogView({ book, review, removed, onRemove }: Props) {
  return (
    <Wrapper style={removed ? { opacity: 0.5 } : {}}>
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
      {!removed && (
        <div>
          {review && <ReviewView review={review} />}
          <button onClick={onRemove}>Remove</button>
        </div>
      )}
    </Wrapper>
  );
}

export default connect(
  (state: State, { readingLogId }: OwnProps) => {
    const readingLog = selectReadingLog(readingLogId, state);

    return {
      book: readingLog && readingLog.book,
      review: readingLog && readingLog.review,
      removed: (readingLog && readingLog.removed) || false,
      readingLogId,
    };
  },
  (dispatch, { readingLogId }: OwnProps) => ({
    onRemove: () => {
      dispatch(removeReadingLog(readingLogId));
    },
  }),
)(ReadingLogView);
