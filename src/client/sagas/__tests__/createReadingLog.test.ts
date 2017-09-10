import { call } from 'redux-saga/effects';
import { ReviewStatus } from '../../interfaces';
import { post, getBookData } from '../../apis';
import * as Actions from '../../actions';
import * as ReadingLog from '../ReadingLog';

describe('createReadingLog', () => {
  it('', () => {
    const title = 'book-title';
    const gen = ReadingLog.create(Actions.createReadingLog({ title }));
    expect(gen.next().value).toEqual(call(getBookData, title));

    const bookData = { id: 'book-1' };
    expect(gen.next(bookData).value).toEqual(
      call(post, '/api/books', bookData),
    );

    const book = { id: 'book-1' };
    const reviewData = { status: ReviewStatus.PLAN_TO_BUY, rating: 0 };
    expect(gen.next(book).value).toEqual(
      call(post, '/api/reviews', reviewData),
    );

    const review = { id: 'review-1' };
    const readingLogData = {
      id: book.id,
      bookId: book.id,
      reviewId: review.id,
    };
    expect(gen.next(review).value).toEqual(
      call(post, '/api/readingLogs', readingLogData),
    );

    const data = { id: 'readingLog-1' };
    expect(gen.next(data).value).toMatchSnapshot();
  });
});
