import TopBar from './Layout/TopBar';
import Header from './Layout/Header';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopBar />
      <Header />
      {children}
    </>
  );
};

export default Layout;
