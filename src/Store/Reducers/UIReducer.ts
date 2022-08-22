import { ActionTypeKey } from "../Actions/ActionTypeKeys";
import { Action } from '../Actions/ActionTypes';

export type UIReducerState = {
    width: number;
};

const initialState = {
    width: 260
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