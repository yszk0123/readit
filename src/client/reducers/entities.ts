import { State, ActionTypes } from '../interfaces';
import merge from '../utils/merge';
import { Action } from '../actions';

const initialState: State['entities'] = {
  users: {},
  books: {},
  reviews: {},
  readingLogs: {},
};

export default function entities(
  state: State['entities'] = initialState,
  action: Action,
) {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS:
      return merge(state, action.payload.entities);
    case ActionTypes.REMOVE_REVIEW_SUCCESS: {
      const review = state.reviews[action.payload.reviewId];

      return {
        ...state,
        reviews: {
          ...state.reviews,
          [review.id]: { ...review, removed: true },
        },
      };
    }
    default:
      return state;
  }
}
