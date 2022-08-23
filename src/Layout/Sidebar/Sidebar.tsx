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
import SideMenuDivider from '../../Components/UI/SideMenuDivider/SideMenuDivider';
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

   const getPathEntryAsObjectKeys = () => {
      return Object.keys(PathEntry);
   }
   getPathEntryAsObjectKeys();
   return (
      <div className={`sidebar${props.width === Constants.NARROW_SIDEBAR_WIDTH ? " sidebar-narrow" : ""}`}>
         <Nav>
            <div className='sidebar-toggler-wrapper'>
               <div className='sidebar-toggler' onClick={() => HandleTogglerClick()}>
                  <i className={`fas ${props.width === Constants.NARROW_SIDEBAR_WIDTH ? "fa-chevron-right" : "fa-chevron-left"}`}></i>
               </div>
            </div>
            <SideMenuDivider text='Main Menu'/>
            {
               getPathEntryAsObjectKeys().map((key: string, idx: number) => {
                  return <NavItem
                     text={PathEntry[key].pageTitle}
                     faIconClass={PathEntry[key].navFAIconClass}
                     isActive={location.pathname === PathEntry[key].path}
                     onClick={() => navigate(PathEntry[key].path)}
                     key={idx}
                  />
               })
            }
         </Nav>
      </div>
   );
}

export default connector(withRouter(Sidebar));