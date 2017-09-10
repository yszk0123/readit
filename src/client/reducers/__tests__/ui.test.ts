import { ActionTypes } from '../../interfaces';
import { ID } from '../../interfaces';
import ui from '../ui';

describe('ui', () => {
  function fetchSuccess(reviewId: ID) {
    return {
      type: ActionTypes.FETCH_SUCCESS,
      payload: { ui: { reviews: [reviewId] } },
    };
  }
  const noopAction = { type: 'NOOP', payload: {} };

  it('should merge payload when fetch success', () => {
    expect(ui(undefined, fetchSuccess('123'))).toMatchSnapshot();
  });

  it('should not add duplicate id when fetch success', () => {
    const reviewId = '123';
    const nextState = ui(undefined, fetchSuccess(reviewId));
    expect(ui(nextState, fetchSuccess(reviewId))).toMatchSnapshot();
  });

  it('should add second id when fetch success', () => {
    const initialState = ui(undefined, noopAction);
    const nextState = ui(initialState, fetchSuccess('123'));
    expect(ui(nextState, fetchSuccess('234'))).toMatchSnapshot();
  });
});
