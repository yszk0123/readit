import { ID, ActionTypes, ReviewStatus, ReviewRating } from '../interfaces';

export type ReviewAction = UpdateReviewAction;

type UpdateReviewPayload = Partial<{
  reviewId: ID;
  status: ReviewStatus;
  rating: ReviewRating;
}>;

export interface UpdateReviewAction {
  type: ActionTypes.UPDATE_REVIEW;
  payload: UpdateReviewPayload;
}

export function updateReview(payload: UpdateReviewPayload): UpdateReviewAction {
  return { type: ActionTypes.UPDATE_REVIEW, payload };
}
