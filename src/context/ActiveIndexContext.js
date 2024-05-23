import React, { createContext, useState } from 'react';

export const ActiveIndexContext = createContext();

export const ActiveIndexProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ActiveIndexContext.Provider value={{ activeTab, setActiveTab, activeIndex, setActiveIndex }}>
      {children}
    </ActiveIndexContext.Provider>
  );
};
