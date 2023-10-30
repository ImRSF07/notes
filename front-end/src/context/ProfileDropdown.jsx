import React, { useState, createContext } from 'react';

export const ProfileDropdownContext = createContext(null);
export const ProfileDropdownProvider = ({ children }) => {
  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);

  const handleToggleProfileDropdown = () => {
    setOpenProfileDropdown(!openProfileDropdown);
  };

  return (
    <ProfileDropdownContext.Provider
      value={{
        openProfileDropdown,
        handleToggleProfileDropdown,
        setOpenProfileDropdown,
      }}
    >
      {children}
    </ProfileDropdownContext.Provider>
  );
};
