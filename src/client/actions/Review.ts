import { ID, ActionTypes, ReviewStatus, ReviewRating } from '../interfaces';

export type ReviewAction = Update;

type UpdatePayload = Partial<{
  reviewId: ID;
  status: ReviewStatus;
  rating: ReviewRating;
}>;

export interface Update {
  type: ActionTypes.UPDATE_REVIEW;
  payload: UpdatePayload;
}

export function update(payload: UpdatePayload): Update {
  return { type: ActionTypes.UPDATE_REVIEW, payload };
}
