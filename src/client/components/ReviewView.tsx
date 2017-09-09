import * as React from 'react';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import styled from 'styled-components';
import { Review, ReviewStatus, ReviewRating, State } from '../interfaces';
import { updateReview } from '../actions';

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

function validateRating(maybeRating: number): maybeRating is ReviewRating {
  return maybeRating >= 0 && maybeRating <= 5;
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
  review: Review;
}

type Props = OwnProps & {
  onStatusChange(status: ReviewStatus): void;
  onRatingChange(rating: ReviewRating): void;
};

export function ReviewView({ review, onStatusChange, onRatingChange }: Props) {
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
      <Label>
        Rating:{' '}
        <select
          value={review.rating}
          onChange={event => {
            const rating = +event.target.value;
            if (validateRating(rating)) {
              onRatingChange(rating);
            }
          }}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </Label>
    </Wrapper>
  );
}

export default connect(
  (state: State, { review }: OwnProps) => ({
    review,
  }),
  (dispatch, { review }) => ({
    onStatusChange: (status: ReviewStatus) => {
      dispatch(updateReview({ reviewId: review.id, status }));
    },
    onRatingChange: (rating: ReviewRating) => {
      dispatch(updateReview({ reviewId: review.id, rating }));
    },
  }),
)(ReviewView);
