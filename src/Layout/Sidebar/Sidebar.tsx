import { Dispatch } from 'react';
import {
   useLocation,
   useNavigate
} from 'react-router';
import {
   connect,
   ConnectedProps
} from "react-redux";

import Nav from './Nav/Nav';
import NavItem from './NavItem/NavItem';
import {
   withRouter,
   RoutedProps
} from '../../Utils/router-util';
import { PathEntry } from '../../routes';

import './Sidebar.css';
import { UIReducerState } from '../../Store/Reducers/UIReducer';
import { setSidebarWidth } from '../../Store/Actions/UI';
import { Constants } from '../../Constants';

type MapStateToProps = {
   width: number
};

const mapStateToProps = (state: UIReducerState): MapStateToProps => {
   return {
      width: state.width,
   };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
   return {
      setSidebarWidth: (width: number) => dispatch(setSidebarWidth(width)),
   };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RoutedProps;

const Sidebar = (props: Props) => {
   const location = useLocation();
   const navigate = useNavigate();

   const HandleTogglerClick = () => {
      if (props.width === Constants.WIDDE_SIDEBAR_WIDTH)
         props.setSidebarWidth(Constants.NARROW_SIDEBAR_WIDTH)
      else
         props.setSidebarWidth(Constants.WIDDE_SIDEBAR_WIDTH)
   }

   return (
      <div className={`sidebar${props.width === Constants.NARROW_SIDEBAR_WIDTH ? " sidebar-narrow" : ""}`}>
         <Nav>
            <div className='sidebar-toggler-wrapper'>
               <div className='sidebar-toggler' onClick={() => HandleTogglerClick()}>
                  <i className={`fas ${props.width === Constants.NARROW_SIDEBAR_WIDTH ? "fa-chevron-right" : "fa-chevron-left"}`}></i>
               </div>
            </div>
            <NavItem
               text={PathEntry.home.pageTitle}
               faIconClass={PathEntry.home.navFAIconClass}
               isActive={location.pathname === PathEntry.home.path}
               onClick={() => navigate(PathEntry.home.path)}
            />
            <NavItem
               text={PathEntry.testPage.pageTitle}
               faIconClass={PathEntry.testPage.navFAIconClass}
               isActive={location.pathname === PathEntry.testPage.path}
               onClick={() => navigate(PathEntry.testPage.path)}
            />
         </Nav>
      </div>
   );
}

export default connector(withRouter(Sidebar));