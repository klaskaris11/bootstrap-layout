import './Layout.css';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const Layout = () => {
   return (
      <div className='main-layout'>
         <Sidebar />
         <Content />
      </div>
   );
}

export default Layout;