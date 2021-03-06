import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ID, Review, ReviewStatus, ReviewRating, State } from '../interfaces';
import * as actions from '../actions';
import { selectReview } from '../selectors';
import Rating from './Rating';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 1.6rem;
`;

const Label = styled.label``;

const statusMap: Record<string, string> = {
  [ReviewStatus.PLAN_TO_BUY]: 'Plan to Buy',
  [ReviewStatus.UNREAD]: 'Unread',
  [ReviewStatus.READING]: 'Reading',
  [ReviewStatus.READ]: 'Read',
  [ReviewStatus.STOP]: 'Stop',
};

function formatStatus(status: ReviewStatus): string {
  return statusMap[status] || '(unknown)';
}

function validateStatus(maybeStatus: string): maybeStatus is ReviewStatus {
  return !!statusMap[maybeStatus];
}

const STATUS = [
  ReviewStatus.PLAN_TO_BUY,
  ReviewStatus.UNREAD,
  ReviewStatus.READING,
  ReviewStatus.READ,
  ReviewStatus.STOP,
];

interface OwnProps {
  reviewId: ID;
}

type Props = OwnProps & {
  review: Review;
  onStatusChange(status: ReviewStatus): void;
  onRatingChange(rating: ReviewRating): void;
  onRatingReset(): void;
};

export function ReviewView({
  review,
  onStatusChange,
  onRatingChange,
  onRatingReset,
}: Props) {
  return (
    <Wrapper>
      <Label>
        Status:
        <select
          value={review.status}
          onChange={event => {
            const status = event.target.value;
            if (validateStatus(status)) {
              onStatusChange(status);
            }
          }}
        >
          {STATUS.map(status => (
            <option key={status} value={status}>
              {formatStatus(status)}
            </option>
          ))}
        </select>
      </Label>
      <Rating
        rating={review.rating}
        onClick={onRatingChange}
        onReset={onRatingReset}
      />
    </Wrapper>
  );
}

export default connect(
  (state: State, { reviewId }: OwnProps) => ({
    review: selectReview(reviewId, state),
  }),
  (dispatch, { reviewId }) => ({
    onStatusChange: (status: ReviewStatus) => {
      dispatch(actions.Review.update({ reviewId, status }));
    },
    onRatingChange: (rating: ReviewRating) => {
      dispatch(actions.Review.update({ reviewId, rating }));
    },
    onRatingReset: () => {
      dispatch(actions.Review.update({ reviewId, rating: 0 }));
    },
  }),
)(ReviewView);
