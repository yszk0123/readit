import { readingLog } from './schema/index';
import { Action as ReduxAction } from 'redux';

// Type

export type ID = string;

export type DateOnly = string;

export enum ReviewStatus {
  PLAN_TO_BUY = 'PLAN_TO_BUY',
  UNREAD = 'UNREAD',
  READING = 'READING',
  READ = 'READ',
  STOP = 'STOP',
}

export type ReviewRating = 0 | 1 | 2 | 3 | 4 | 5;

// Entity

export interface User {
  id: ID;
  nickname: string;
  email: string | null;
}

export interface Book {
  id: ID;
  title: string;
  subtitle: string;
  author: string;
  thumbnailLink: string;
  description: string;

  category: string;
  pageCount: number;
  publisher: string;
  publishedAt: DateOnly;
  isbn: string | null;
  meta: {
    source: {
      type: string;
      link: string;
      searchText: string;
    };
  };
}

export interface Review {
  id: ID;
  status: ReviewStatus;
  rating: ReviewRating;
}

export interface ReadingLog {
  id: ID;
  book: Book;
  review: Review;
}

// Action

export interface Action extends ReduxAction {
  payload: any;
}

export enum ActionTypes {
  HELLO = 'HELLO',
  CHANGE_NAME = 'CHANGE_NAME',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAILURE = 'FETCH_FAILURE',
  FETCH_READING_LOGS = 'FETCH_READING_LOGS',
  UPDATE_REVIEW = 'UPDATE_REVIEW',
}

// State

export interface State {
  entities: {
    users: Record<ID, User>;
    books: Record<ID, Book>;
    reviews: Record<ID, Review>;
    readingLogs: Record<ID, ReadingLog>;
  };
  ui: {
    currentUser: ID | null;
    readingLogs: ID[];
  };
}
