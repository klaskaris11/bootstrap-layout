import * as React from 'react';
import NavbarBrand from '../NavbarBrand/NavbarBrand';

type Props = {
   children: React.ReactNode
}

const Nav = (props: Props) => {
   return <nav className="nav flex-column">
      <NavbarBrand />
      {props.children}
   </nav>;
};

export default Nav;
