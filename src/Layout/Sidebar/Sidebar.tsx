import { Dispatch } from 'react';
import {
   useLocation,
   useNavigate
} from 'react-router';
import {
   connect,
   ConnectedProps
} from "react-redux";
import { has } from 'lodash';
import './Sidebar.css';

import Nav from './Nav/Nav';
import NavItem from './NavItem/NavItem';
import NavDropdownItem from './NavDropdownItems/NavDropdownItems';
import SideMenuDivider from '../../Components/UI/SideMenuDivider/SideMenuDivider';
import {
   withRouter,
   RoutedProps
} from '../../Utils/router-util';
import { PathEntry } from '../../routes';
import { UIReducerState } from '../../Store/Reducers/UIReducer';
import { setSidebarWidth } from '../../Store/Actions/UI';
import { Constants } from '../../Constants';
import { isSidebarNarrow } from '../../Utils/LayoutUtils/LayoutUtils';

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
      if (!isSidebarNarrow(props.width))
         props.setSidebarWidth(Constants.NARROW_SIDEBAR_WIDTH)
      else
         props.setSidebarWidth(Constants.WIDDE_SIDEBAR_WIDTH)
   }

   const getPathEntryAsObjectKeys = (): string[] => {
      return Object.keys(PathEntry);
   }

   const getSubmenuPaths = (key: string) => {
      const submenus: PathEntry = PathEntry[key].submenu!;
      return Object.keys(submenus).map((submenuKey: string) => {
         return submenus[submenuKey].path;
      })
   }

   return (
      <div className={`sidebar${isSidebarNarrow(props.width) ? " sidebar-narrow" : ""}`}>
         <Nav>
            <div title={isSidebarNarrow(props.width) ? "Επέκταση Μενού" : "Μάζεμα Μενού"} className='sidebar-toggler-wrapper'>
               <div className='sidebar-toggler' onClick={() => HandleTogglerClick()}>
                  <i className={`fas ${isSidebarNarrow(props.width) ? "fa-chevron-right" : "fa-chevron-left"}`}></i>
               </div>
            </div>
            <SideMenuDivider text='Main Menu' />
            {
               getPathEntryAsObjectKeys().map((key: string, idx: number) => {
                  return has(PathEntry[key], "submenu")
                     ? <NavDropdownItem
                        text={PathEntry[key].pageTitle}
                        faIconClass={PathEntry[key].navFAIconClass}
                        isActive={getSubmenuPaths(key).includes(location.pathname)}
                        onClick={() => navigate(PathEntry[key].path)}
                        submenu={PathEntry[key].submenu!}
                        key={idx}
                     />
                     : <NavItem
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