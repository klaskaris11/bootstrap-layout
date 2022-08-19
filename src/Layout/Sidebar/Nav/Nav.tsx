import * as React from 'react';

type Props = {
   children: React.ReactNode
}

const Nav = (props: Props) => {
   return <nav className="nav flex-column">
      {props.children}
   </nav>;
};

export default Nav;
