import React, { useState, createContext } from 'react';

export const ModalContext = createContext(null);
export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <ModalContext.Provider
      value={{ openModal, handleToggleModal, setOpenModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
