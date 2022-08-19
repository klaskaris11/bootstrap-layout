import * as React from 'react';
import './NavItem.css';

type Props = {
   text: string,
   isActive?: boolean,
   onClick: Function
}

const NavItem = (props: Props) => {
   const active = props.isActive ? props.isActive : false;
   return <button
      className={`nav-link${active ? " active" : ""}`}
      onClick={()=> props.onClick}
   >
      {props.text}
   </button>;
};

export default NavItem;
