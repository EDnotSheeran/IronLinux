import React from 'react';
import { Navbar, Sidebar, Header, Footer } from '@components/admin';

const Dashboard: React.FC = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 min-h-screen">
        <Navbar />
        <Header />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
