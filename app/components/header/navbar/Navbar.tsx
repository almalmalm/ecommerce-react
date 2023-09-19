'use client';
import React, { useState } from 'react';
import { HamburgerMenu } from './hamburger-menu/HamburgerMenu';
import { Search } from './search/Search';
import { Cart } from './cart/Cart';
import { Account } from './account/Account';
import { useWindowSize } from '@/app/hooks/hooks';
import { Logo } from '../info/logo/Logo';
import { NavigationMenu } from './navigation-menu/NavigationMenu';

export const Navbar = () => {
  const windowSize = useWindowSize();
  const [searchOpened, setSearchOpened] = useState(false);
  const openSearch = () => {
    setSearchOpened(!searchOpened);
  };
  if (windowSize.width > 1400) {
    return (
      <div className=" h-[5.75rem] bg-white flex items-center">
        <Logo />
        <NavigationMenu />
        <Search searchState={searchOpened} searchFunction={openSearch} />
        <Cart />
        <Account />
      </div>
    );
  } else {
    return (
      <div className="h-16 bg-main-blue flex items-center justify-between">
        <HamburgerMenu />
        <Search />
        <Cart />
        <Account />
      </div>
    );
  }
};
