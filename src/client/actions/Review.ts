import { ID, ActionTypes, ReviewStatus, ReviewRating } from '../interfaces';

export type ReviewAction = FetchAll | Create | Update | Remove | RemoveSuccess;

type UpdatePayload = Partial<{
  reviewId: ID;
  status: ReviewStatus;
  rating: ReviewRating;
}>;

interface FetchAllPayload {
  limit?: number;
}

export interface FetchAll {
  type: ActionTypes.FETCH_REVIEWS;
  payload: FetchAllPayload;
}

export function fetchAll(payload: FetchAllPayload = {}): FetchAll {
  return { type: ActionTypes.FETCH_REVIEWS, payload };
}

interface CreatePayload {
  title: string;
}

export interface Create {
  type: ActionTypes.CREATE_REVIEW;
  payload: CreatePayload;
}

export function create(payload: CreatePayload): Create {
  return { type: ActionTypes.CREATE_REVIEW, payload };
}

export interface Update {
  type: ActionTypes.UPDATE_REVIEW;
  payload: UpdatePayload;
}

export function update(payload: UpdatePayload): Update {
  return { type: ActionTypes.UPDATE_REVIEW, payload };
}

export interface Remove {
  type: ActionTypes.REMOVE_REVIEW;
  payload: { reviewId: ID };
}

export function remove(reviewId: ID): Remove {
  return { type: ActionTypes.REMOVE_REVIEW, payload: { reviewId } };
}

export interface RemoveSuccess {
  type: ActionTypes.REMOVE_REVIEW_SUCCESS;
  payload: { reviewId: ID };
}

export function removeSuccess(reviewId: ID): RemoveSuccess {
  return {
    type: ActionTypes.REMOVE_REVIEW_SUCCESS,
    payload: { reviewId },
  };
}
