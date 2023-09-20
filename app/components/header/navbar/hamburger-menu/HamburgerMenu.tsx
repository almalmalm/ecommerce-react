import React, { useState } from 'react';
import { HamburgerModal } from './hamburger-menu-modal/HamburgerModal';

export const HamburgerMenu = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {modal && <HamburgerModal onclick={handleModal} />}
      <div className="ml-3" onClick={handleModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
          <path d="M4 4H21" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M4 10H21" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M4 16H21" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
};
