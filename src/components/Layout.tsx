import React, { useState, useEffect, ReactNode } from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isMobileSize, setIsMobileSize] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarVisible(false);
        setIsMobileSize(true);
      } else {
        setSidebarVisible(true);
        setIsMobileSize(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially to set the state correctly

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles: { [key: string]: React.CSSProperties } = {
    body: {
      padding: '0.8%',
      overflow: 'hidden',
      width: '100vw',
      display: 'flex',
    },
    main: {
      position: 'relative',
      height: '100%',
      overflow: 'hidden',
      flexGrow: 1,
      marginLeft: '0.8%',
    },
    menuButton: {
      position: 'absolute',
      top: '10px',
      left: '25px',
      zIndex: 1000,
      color: 'gray',
      display: isMobileSize ? 'block' : 'none',
    },
  };

  return (
    <div style={styles.body} className="body-bg h-full">
      <button style={styles.menuButton} onClick={toggleSidebar}>
        <FiMenu size={24} />
      </button>
      <Sidebar isVisible={isSidebarVisible} />
      <div className="rounded round-gradient text-white border border-solid border-white border-opacity-25" style={styles.main}>
        {children}
        <BottomBar />
      </div>
    </div>
  );
};

export default Layout;
