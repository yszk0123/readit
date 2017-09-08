import { User, Book, State } from '../interfaces';

export function getBook(state: State, bookId: string): Book | null {
  return state.entities.books[bookId];
}

export function getUser(state: State): User {
  return state.entities.user;
}
