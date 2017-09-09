import { combineReducers } from 'redux';
import { ReadingLog } from './../interfaces';
import { Action, State, Review, User, Book, ActionTypes } from '../interfaces';
import entities from './entities';
import ui from './ui';

export default combineReducers({
  entities,
  ui,
});
