import * as React from 'react';
import './Layout.css';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

type Props = {}

const Layout = (props: Props) => {
   return (
      <div className='main-layout'>
         <Sidebar />
         <Content />
      </div>
   );
}

export default Layout;