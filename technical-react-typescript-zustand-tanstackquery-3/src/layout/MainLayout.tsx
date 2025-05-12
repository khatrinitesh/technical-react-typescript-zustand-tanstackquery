import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout:React.FC = () => {
  return (
    <>
       <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4 bg-[#c1c1c1]">
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default MainLayout;
