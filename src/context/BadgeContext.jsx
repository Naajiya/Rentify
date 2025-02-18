import React, { createContext, useState, useEffect } from 'react';

export const BadgeContext = createContext();

function BadgeProvider({ children }) {
  // Initialize state with the value from localStorage, or default to 0
  const [countBadge, setBadge] = useState(() => {
    const savedCount = localStorage.getItem('countBadge');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const [orderBadge, setOrderBadge] = useState(() => {
    const savedOrderBdg = localStorage.getItem('orderBadge');
    return savedOrderBdg ? JSON.parse(savedOrderBdg) : false;
  });

  // Update localStorage whenever countBadge or orderBadge changes
  useEffect(() => {
    localStorage.setItem('countBadge', countBadge);
    localStorage.setItem('orderBadge', JSON.stringify(orderBadge));
  }, [countBadge, orderBadge]);

  const incrementBadge = () => {
    setBadge((prevCount) => prevCount + 1);
  };

  const toggleOrderBadge = () => {
    setOrderBadge((prevOrderBadge) => !prevOrderBadge);
  };

  return (
    <BadgeContext.Provider value={{ countBadge, setBadge, incrementBadge, orderBadge, toggleOrderBadge }}>
      {children}
    </BadgeContext.Provider>
  );
}

export default BadgeProvider;