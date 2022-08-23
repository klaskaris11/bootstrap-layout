import * as React from 'react';
import './NavbarBrand.css';

type Props = {}

const NavbarBrand = (props: Props) => {
  return <div className='navbar-brand'>
      <i className="fas fa-box-open me-2"></i> Brand Name
    </div>;
};

export default NavbarBrand;
