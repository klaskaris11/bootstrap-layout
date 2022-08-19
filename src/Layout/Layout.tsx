import * as React from 'react';
import './Layout.css';
import Sidebar from './Sidebar/Sidebar';

type Props = {}

const Layout = (props: Props) => {
   return (
      <div className='main-layout'>
         Layout
         <Sidebar />
      </div>
   );
}

export default Layout;