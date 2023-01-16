import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main>{children}</main>
      <Footer />
    </>
  );
}
