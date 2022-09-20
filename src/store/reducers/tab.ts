import {TabAction, TabState} from '../../types/tab';

const defaultState: TabState = {
  selectedTab: '',
};

const tab = (state: TabState = defaultState, action: TabAction) => {
  switch (action.type) {
    case 'SET_SELECTED_TAB':
      return {
        ...state,
        selectedTab: action.payload,
      };

    default:
      return state;
  }
};

export default tab;
