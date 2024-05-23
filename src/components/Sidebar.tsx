import React, { useContext } from 'react';
import { FiHome, FiSearch, FiBook, FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { ActiveIndexContext } from '../context/ActiveIndexContext';

interface NavigationItem {
  id: string;
  icon: JSX.Element;
  index: number;
  route: string;
}

interface NavItemProps {
  icon: JSX.Element;
  active: boolean;
  onItemClick: () => void;
  styles: {
    navItem: React.CSSProperties;
    activeNavItem: React.CSSProperties;
    inactiveNavItem: React.CSSProperties;
  };
}

const Sidebar: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const { activeIndex, setActiveIndex } = useContext(ActiveIndexContext);
  const router = useRouter();

  const navigationItems: NavigationItem[] = [
    { id: 'home', icon: <FiHome />, index: 0, route: '/' },
    { id: 'search', icon: <FiSearch />, index: 1, route: '/Search' },
    { id: 'library', icon: <FiBook />, index: 2, route: '/Library' },
    { id: 'logout', icon: <FiLogOut />, index: 3, route: '/SignIn' },
  ];

  const handleItemClick = (index: number, route: string) => {
    setActiveIndex(index);
    router.push(route);
  };

  const styles = {
    container: {
      padding: '15px',
      height: '100%',
      transition: 'transform 0.3s ease',
      transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    },
    navItem: {
      display: 'flex',
      cursor: 'pointer',
      padding: '10px',
      borderRadius: '50%',
      margin: '5px 0',
    },
    activeNavItem: {
      backgroundColor: 'gray',
      color: 'white',
    },
    inactiveNavItem: {
      backgroundColor: 'transparent',
      color: 'gray',
    },
    '@media screen and (min-width: 768px)': {
      container: {
        display: 'none',
      },
    },
  };

  return (
    <div className="border bg-[#141414] sidebar rounded" style={styles.container}>
      <div className="flex flex-col items-center space-y-4">
        <img src="/assets/house_of_models.png" alt="House of Design" className="w-8 h-8 mt-7 mb-5" />
        {navigationItems.map((item) => (
          <NavItem
            key={item.id} // Use a unique identifier as the key
            icon={item.icon}
            active={activeIndex === item.index}
            onItemClick={() => handleItemClick(item.index, item.route)}
            styles={styles}
          />
        ))}
      </div>
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({ icon, active, onItemClick, styles }) => (
  <button
    className="nav-item"
    style={{ ...styles.navItem, ...(active ? styles.activeNavItem : styles.inactiveNavItem) }}
    onClick={onItemClick}
  >
    {icon}
  </button>
);

export default Sidebar;
