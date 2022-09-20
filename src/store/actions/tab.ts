import { TabDispatch } from './../../types/tab';

export const setSelectedTab = (selectedTab : string) => (dispatch:TabDispatch) =>  {
    dispatch({
        type: "SET_SELECTED_TAB",
        payload: selectedTab
    })
};



  