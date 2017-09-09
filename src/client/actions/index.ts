import { FetchReadingLogsAction } from './index';
import { readingLog } from './../schema/index';
import {
  ID,
  Action,
  ActionTypes,
  ReviewStatus,
  ReviewRating,
} from '../interfaces';

export interface FetchReadingLogsPayload {
  limit?: number;
}

export interface FetchReadingLogsAction extends Action {
  type: ActionTypes.FETCH_READING_LOGS;
  payload: FetchReadingLogsPayload;
}

export function fetchReadingLogs(
  payload: FetchReadingLogsPayload,
): FetchReadingLogsAction {
  return { type: ActionTypes.FETCH_READING_LOGS, payload };
}

export type UpdateReviewPayload = Partial<{
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
