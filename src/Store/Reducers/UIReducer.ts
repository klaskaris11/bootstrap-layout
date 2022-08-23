import { ActionTypeKey } from "../Actions/ActionTypeKeys";
import { Action } from '../Actions/ActionTypes';

import { Constants } from "../../Constants";

export type UIReducerState = {
    width: number;
};

const initialState = {
    width: Constants.WIDDE_SIDEBAR_WIDTH
};

const setSidebarWidth = (state: UIReducerState, action: Action) => {
    return {
        ...state,
        width: action.payload
    }
}

const reducer = (state: UIReducerState = initialState, action: Action): UIReducerState => {
    switch (action.type) {
        case ActionTypeKey.SET_SIDEBAR_WIDTH: return setSidebarWidth(state, action);
        default:
            return state;
    }
};

export default reducer;