import * as ReadingLog from './ReadingLog';
import * as Review from './Review';
import * as User from './User';
import * as Search from './Search';
import { FetchAction } from './fetch';
import { NoopAction } from './noop';

export type Action =
  | ReadingLog.ReadingLogAction
  | Review.ReviewAction
  | User.UserAction
  | Search.SearchBookByTitleAction
  | FetchAction
  | NoopAction;

export { ReadingLog, Review, User, Search };

export * from './fetch';
export * from './noop';
