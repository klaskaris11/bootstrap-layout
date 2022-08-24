import { Constants } from "../../Constants"

export const isSidebarNarrow = (width: number): boolean => {
    return width === Constants.NARROW_SIDEBAR_WIDTH ? true : false;
}