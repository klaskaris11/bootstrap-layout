import { ReactNode } from 'react';
import {
    connect,
    ConnectedProps
} from "react-redux";
import './Footer.css';

import { UIReducerState } from '../../../Store/Reducers/UIReducer';
import {isSidebarNarrow} from '../../../Utils/LayoutUtils/LayoutUtils';

type MapStateToProps = {
    width: number
};

const mapStateToProps = (state: UIReducerState): MapStateToProps => {
    return {
        width: state.width,
    };
};

const connector = connect(mapStateToProps);

type OwnProps = {
    children: ReactNode;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;


const Footer = (props: Props) => {
    return <footer className={`footer-container${isSidebarNarrow(props.width) ? " content-container-narrow" : ""} border-top py-3`}>
        {props.children}
    </footer>
};

export default connector(Footer);
