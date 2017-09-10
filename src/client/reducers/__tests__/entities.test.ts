import { ReviewStatus, ReviewRating } from '../../interfaces';
import * as actions from '../../actions';
import entities from '../entities';

describe('entities', () => {
  it('should merge payload when fetch success', () => {
    const reviewId = '123';
    const review = {
      id: reviewId,
      status: ReviewStatus.PLAN_TO_BUY,
      rating: 0 as ReviewRating,
    };
    const action = actions.fetchSuccess({
      entities: { reviews: { [reviewId]: review } },
    });

    expect(entities(undefined, action)).toMatchSnapshot();
  });
});
