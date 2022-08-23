import {
    connect,
    ConnectedProps
} from "react-redux";
import { UIReducerState } from "../../../Store/Reducers/UIReducer";
import './SideMenuDivider.css';

import { Constants } from '../../../Constants';

type MapStateToProps = {
    width: number
};

type OwnProps = {
    text: string;
}

const mapStateToProps = (state: UIReducerState): MapStateToProps => {
    return {
        width: state.width,
    };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

const SideMenuDivider = (props: Props) => {
    return props.width === Constants.WIDDE_SIDEBAR_WIDTH
        ? <div className='menu-divider unselectable'>{props.text}</div>
        : <hr style={{marginBottom: 5, marginTop: 0}} />;
};

export default connector(SideMenuDivider);
