import { User, Book, ReadingLog, State } from '../interfaces';

export function selectBook(state: State, bookId: string): Book | null {
  return state.entities.books[bookId];
}

export function selectReadingLog(
  state: State,
  readingLogId: string,
): ReadingLog | null {
  return state.entities.readingLogs[readingLogId];
}

export function selectUser(state: State): User {
  return state.entities.user;
}
