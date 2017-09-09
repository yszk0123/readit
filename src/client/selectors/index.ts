import { readingLog, book, review } from './../schema/index';
import { denormalize } from 'normalizr';
import { User, Book, Review, ReadingLog, State } from '../interfaces';
import * as schema from '../schema';

export function selectBook(bookId: string, state: State): Book | null {
  return denormalize(bookId, schema.book, state.entities);
}

export function selectReview(reviewId: string, state: State): Review | null {
  return denormalize(reviewId, schema.review, state.entities);
}

export function selectReadingLog(
  readingLogId: string,
  state: State,
): ReadingLog | null {
  return denormalize(readingLogId, schema.readingLog, state.entities);
}

export function selectCurrentUser(state: State): User | null {
  return denormalize(state.ui.currentUser, schema.user, state.entities);
}
