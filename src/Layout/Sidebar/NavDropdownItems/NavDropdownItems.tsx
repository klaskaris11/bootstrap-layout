import { useState } from 'react';
import {
    connect,
    ConnectedProps
} from "react-redux";
import {
    useLocation,
    useNavigate
} from 'react-router';
import "./NavDropdownItems.css";

import {
    withRouter,
    RoutedProps
} from '../../../Utils/router-util';
import { UIReducerState } from '../../../Store/Reducers/UIReducer';
import { PathEntry } from '../../../routes';
import NavDropdownItem from './NavDropdownItem/NavDropdownItem';
import { isSidebarNarrow } from '../../../Utils/LayoutUtils/LayoutUtils';

type MapStateToProps = {
    width: number
};

const mapStateToProps = (state: UIReducerState): MapStateToProps => {
    return {
        width: state.width,
    };
};

type OwnProps = {
    text: string,
    faIconClass?: string,
    isActive?: boolean,
    onClick: Function,
    submenu: PathEntry,
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = OwnProps & PropsFromRedux & RoutedProps;

const NavDropdownItems = (props: Props) => {

    const [isChildMenuOpen, setIsChildMenuOpen] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();

    const iconAlignment = !isSidebarNarrow(props.width) ? "left" : "center";

    const getSubmenuAsObjectKeys = () => {
        return Object.keys(props.submenu);
    }

    const onMouseEnter = () => {
        setIsChildMenuOpen(true)
    }

    const onMouseLeave = () => {
        setIsChildMenuOpen(false)
    }

    return <span
        className={`nav-link nav-button${props.isActive || isChildMenuOpen ? " active" : ""} text-${iconAlignment} position-relative`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {
            props.faIconClass && <i className={`me-2 ${props.faIconClass} ${isSidebarNarrow(props.width) && "fa-1_5x"}`} />
        }
        {
            !isSidebarNarrow(props.width)
                ? <>
                    {props.text} <i className={`fas fa-angle-right float-end me-2 position-relative`} style={{ top: 5 }}></i>
                </>
                : null
        }
        <div
            className={`subnav${isChildMenuOpen ? " subnav-show" : ""} shadow`}
            style={isChildMenuOpen ? {
                position: "absolute",
                inset: "0px auto auto 0px",
                transform: `translate(${props.width}px, 0px)`
            } : {}
            }>
            {
                isSidebarNarrow(props.width) && <div className='subnav-title text-center w-100 mb-2 pb-2 border-bottom unselectable font-weight-600'>{props.text}</div>
            }
            {
                getSubmenuAsObjectKeys().map((key: string, idx: number) => {
                    return <NavDropdownItem
                        text={props.submenu[key].pageTitle}
                        isActive={location.pathname === props.submenu[key].path}
                        onClick={() => {
                            navigate(props.submenu[key].path);
                            setIsChildMenuOpen(true);
                        }}
                        key={idx}
                    />
                })
            }
        </div>
    </span>;
};

export default connector(withRouter(NavDropdownItems));
