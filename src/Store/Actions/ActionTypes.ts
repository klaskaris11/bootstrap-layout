import { ActionTypeKey } from "./ActionTypeKeys";
import { UIReducerState } from "../Reducers/UIReducer";

export type setSidebarWidth = {
    readonly type: ActionTypeKey.SET_SIDEBAR_WIDTH,
    readonly payload: UIReducerState['width']
};

export type Action = setSidebarWidth;