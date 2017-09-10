import { ID } from '../../interfaces';
import * as actions from '../../actions';
import ui from '../ui';

describe('ui', () => {
  function fetchSuccess(reviewId: ID) {
    return actions.fetchSuccess({ ui: { reviews: [reviewId] } });
  }

  it('should merge payload when fetch success', () => {
    expect(ui(undefined, fetchSuccess('123'))).toMatchSnapshot();
  });

  it('should not add duplicate id when fetch success', () => {
    const reviewId = '123';
    const nextState = ui(undefined, fetchSuccess(reviewId));
    expect(ui(nextState, fetchSuccess(reviewId))).toMatchSnapshot();
  });

  it('should add second id when fetch success', () => {
    const initialState = ui(undefined, actions.noop());
    const nextState = ui(initialState, fetchSuccess('123'));
    expect(ui(nextState, fetchSuccess('234'))).toMatchSnapshot();
  });
});
