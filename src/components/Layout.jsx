import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
  const pathname = usePathname();
  const layout = ['/login', '/sign-up', '/forgot-password'];
  const noLayout = layout.includes(pathname);

  return (
    <>
      {noLayout ? (
        <div>{children}</div>
      ) : (
        <div id="wrapper">
          <div className="overlay" />
          <Header />
          {children}
          <SideBar />
        </div>
      )}
    </>
  );
};

export default Layout;
