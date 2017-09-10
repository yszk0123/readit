import { ActionTypes } from '../../interfaces';
import entities from '../entities';

describe('entities', () => {
  it('should merge payload when fetch success', () => {
    const reviewId = '123';
    const review = { id: reviewId };
    const action = {
      type: ActionTypes.FETCH_SUCCESS,
      payload: { entities: { reviews: { [reviewId]: review } } },
    };

    expect(entities(undefined, action)).toMatchSnapshot();
  });
});
