import { ActionTypeKey } from "./ActionTypeKeys";
import * as actionTypes from './ActionTypes'

export const setSidebarWidth = (width: number): actionTypes.setSidebarWidth => {
    return {
        type: ActionTypeKey.SET_SIDEBAR_WIDTH,
        payload: width
    };
}