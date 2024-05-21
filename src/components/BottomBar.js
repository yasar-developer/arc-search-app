import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { useRouter } from 'next/router';

const BottomBar = () => {
  const router = useRouter();
  const styles = {
    container: {
      position: 'absolute',
      bottom: 30,
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      width: '90%',
      backgroundColor: '#161516',
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      maxWidth: '800px',
    },
    textBox: {
      border: 'none',
      backgroundColor: 'transparent',
      outline: 'none',
      flexGrow: 1,
    },
    button: {
      position: 'relative',
      width: 'calc(90px + 1%)',
      height: '35px',
      margin: '0 1px',
    },
    icon: {
      marginLeft: '5px',
      marginRight: '10px',
      strokeWidth: 1,
      minWidth: '24px',
      minHeight: '24px',
    },
  };

  const handleShopClick = () => {
    router.push('/Searching');
  };

  return (
    <div className="text-sm font-Satoshi inner-border rounded-full text-gray-500" style={styles.container}>
      <CiCirclePlus className="text-2xl" style={styles.icon} />
      <input type="text" placeholder="Ask me anything..." style={styles.textBox} />
      <button
        className="bg-white flex items-center rounded-full justify-center text-black"
        style={styles.button}
        onClick={handleShopClick}
      >
        <img src="/assets/shop-star.svg" alt="Shop" width={18} height={18} />
        &ensp;Shop
      </button>
    </div>
  );
};

export default BottomBar;
