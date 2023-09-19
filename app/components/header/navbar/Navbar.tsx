'use client';
import React, { useState } from 'react';
import { HamburgerMenu } from './hamburger-menu/HamburgerMenu';
import { Search } from './search/Search';
import { Cart } from './cart/Cart';
import { Account } from './account/Account';
import { Logo } from '../info/logo/Logo';
import { NavigationMenu } from './navigation-menu/NavigationMenu';

interface INavbarProps {
  mobile?: boolean;
}

export const Navbar: React.FC<INavbarProps> = ({ mobile }) => {
  const [searchOpened, setSearchOpened] = useState(false);
  const openSearch = () => {
    setSearchOpened(!searchOpened);
  };

  if (mobile) {
    return (
      <div className="h-16 bg-main-blue flex items-center justify-between">
        <HamburgerMenu />
        <Search mobile={mobile} />
        <Cart mobile={mobile} />
        <Account mobile={mobile} />
      </div>
    );
  } else {
    return (
      <div className=" h-[5.75rem] bg-white flex items-center">
        <Logo />
        <NavigationMenu searchState={searchOpened} />
        <Search searchState={searchOpened} searchFunction={openSearch} />
        <Cart />
        <Account />
      </div>
    );
  }
};
