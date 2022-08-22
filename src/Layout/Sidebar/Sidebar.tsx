import * as React from 'react';
import { 
   useLocation,
   useNavigate
 } from 'react-router';

import Nav from './Nav/Nav';
import NavItem from './NavItem/NavItem';
import { 
   withRouter,
   RoutedProps
 } from '../../Utils/router-util';
 import { PathEntry } from '../../routes';

import './Sidebar.css';

type Props = RoutedProps;

const Sidebar = (props: Props) => {
   const location = useLocation();
   const navigate = useNavigate();

   return (
      <div className='sidebar'>
         <Nav>
            <NavItem
               text={PathEntry.home.pageTitle}
               faIconClass={PathEntry.home.navFAIconClass}
               isActive={location.pathname === PathEntry.home.path}
               onClick={() => navigate(PathEntry.home.path)}
            />
            <NavItem
               text="Link1"
               onClick={() => console.log("clicked")}
            />
            <NavItem
               text="Link2"
               onClick={() => console.log("clicked")}
            />
         </Nav>
      </div>
   );
}

export default withRouter(Sidebar);