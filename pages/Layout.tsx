import React, { ReactNode } from 'react'
import Header from './Header';
import Footer from './Footer';
import '../styles/Home.module.scss'
interface LayoutProps { children: ReactNode; }
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
