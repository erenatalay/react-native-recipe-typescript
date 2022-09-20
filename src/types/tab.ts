import {ThunkDispatch} from 'redux-thunk';

export interface Tab {
  selectedTab: string;
}

export interface TabState {
  selectedTab: String;
}

interface SET_SELECTED_TAB {
  type: 'SET_SELECTED_TAB';
  payload: String;

}

export type TabAction =
  | SET_SELECTED_TAB

export type TabDispatch = ThunkDispatch<TabState, void, TabAction>;
