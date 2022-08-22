import * as React from 'react';
import './NavItem.css';

type Props = {
   text: string,
   faIconClass?: string,
   isActive?: boolean,
   onClick: Function
}

const NavItem = (props: Props) => {
   const active = props.isActive ? props.isActive : false;
   return <button
      className={`nav-link nav-button${active ? " active" : ""}`}
      onClick={()=> props.onClick}
   >
      {
         props.faIconClass && <i className={`me-2 ${props.faIconClass}`} />
      }
      {props.text}
   </button>;
};

export default NavItem;
