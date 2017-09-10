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
  originalLink: string;
  title: string;
  subtitle: string | null;
  author: string;
  thumbnailLink: string;
  description: string;

  category: string;
  pageCount: number;
  publisher: string;
  publishedAt: DateOnly;
  isbn: string | null;
}

export interface Review {
  id: ID;
  book: Book;
  status: ReviewStatus;
  rating: ReviewRating;
  removed?: boolean;
}

export interface ReadingLog {
  id: ID;
  book: Book;
  review: Review;
  removed?: boolean;
}

// Action

export enum ActionTypes {
  FETCH_READING_LOGS = 'FETCH_READING_LOGS',
  CREATE_READING_LOG = 'CREATE_READING_LOG',
  REMOVE_READING_LOG = 'REMOVE_READING_LOG',
  REMOVE_READING_LOG_SUCCESS = 'REMOVE_READING_LOG_SUCCESS',

  FETCH_REVIEWS = 'FETCH_REVIEWS',
  CREATE_REVIEW = 'CREATE_REVIEW',
  UPDATE_REVIEW = 'UPDATE_REVIEW',
  REMOVE_REVIEW = 'REMOVE_REVIEW',
  REMOVE_REVIEW_SUCCESS = 'REMOVE_REVIEW_SUCCESS',

  NOOP = 'NOOP',
  SEARCH_BOOK_BY_TITLE = 'SEARCH_BOOK_BY_TITLE',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAILURE = 'FETCH_FAILURE',
  REMOVE_ENTITY = 'REMOVE_ENTITY',
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
    books: ID[];
    reviews: ID[];
    titleInput: string;
  };
}
