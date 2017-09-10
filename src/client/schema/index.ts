import { schema } from 'normalizr';

export const user = new schema.Entity('users');

export const book = new schema.Entity('books');

export const review = new schema.Entity('reviews', {
  book,
});

export const readingLog = new schema.Entity('readingLogs', {
  book,
  review,
});
