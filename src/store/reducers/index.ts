import { TabState } from './../../types/tab';
import {combineReducers} from 'redux';
import {UserState} from '../../types/user';
import users from "./users";
import tab from "./tab";

export interface AppState {
  users: UserState;
  tab : TabState
}

const rootReducer = combineReducers<AppState>({
    users,
    tab
});

export default rootReducer;
