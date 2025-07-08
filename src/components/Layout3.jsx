// src/components/Layout.jsx
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar3';
import Header3 from './Header3';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(() => {
    // ✅ Set initial sidebar state based on screen width
    return window.innerWidth > 768;
  });

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize(); // run once on mount

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="d-flex">
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div
        className="flex-grow-1"
        style={{
          marginLeft: isOpen ? 250 : 60, // 60 when collapsed
          transition: 'margin-left 0.3s ease',
        }}
      >
        <Header3 toggle={toggleSidebar} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
