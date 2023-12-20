import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(prevModal => !prevModal);
  };

  return (
    <ModalContext.Provider value={{ modal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
