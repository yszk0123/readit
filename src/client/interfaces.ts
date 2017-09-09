import { Action as ReduxAction } from 'redux';

export interface Action extends ReduxAction {
  payload: any;
}

export type DateOnly = string;

export enum ReadingStatus {
  PLAN_TO_BUY = 'PLAN_TO_BUY',
  UNREAD = 'UNREAD',
  READING = 'READING',
  READ = 'READ',
  STOP = 'STOP',
}

export interface ReadingLog {
  id: string;
  bookId: string;
  status: ReadingStatus;
}

export interface User {
  id: string;
  nickname: string;
  email: string | null;
}

export interface Book {
  id: string;
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

export enum ActionTypes {
  HELLO = 'HELLO',
  CHANGE_NAME = 'CHANGE_NAME',
  FETCH_BOOK = 'FETCH_BOOK',
  FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS',
  FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE',
}

export interface State {
  entities: {
    user: User;
    books: Record<string, Book>;
    readingLogs: Record<string, ReadingLog>;
  };
}
