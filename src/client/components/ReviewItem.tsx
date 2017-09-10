import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ID, State, Book } from '../interfaces';
import { selectReview } from '../selectors';
import BookView from './BookView';
import ReviewView from './ReviewView';
import * as actions from '../actions';

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
`;

interface OwnProps {
  reviewId: ID;
}

type Props = OwnProps & {
  book: Book | null;
  removed: boolean;
  onRemove(): void;
};

export function ReviewItem({ book, reviewId, removed, onRemove }: Props) {
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
          {reviewId && <ReviewView reviewId={reviewId} />}
          <button onClick={onRemove}>Remove</button>
        </div>
      )}
    </Wrapper>
  );
}

export default connect(
  (state: State, { reviewId }: OwnProps) => {
    const review = selectReview(reviewId, state);

    return {
      book: review && review.book,
      review: review && review,
      removed: (review && review.removed) || false,
      reviewId,
    };
  },
  (dispatch, { reviewId }: OwnProps) => ({
    onRemove: () => {
      dispatch(actions.Review.remove(reviewId));
    },
  }),
)(ReviewItem);
