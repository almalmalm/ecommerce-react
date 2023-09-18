import React from 'react';
import { HamburgerMenu } from './hamburger-menu/HamburgerMenu';
import { Search } from './search/Search';
import { Cart } from './cart/Cart';
import { Account } from './account/Account';

export const Navbar = () => {
  return (
    <div className="h-16 bg-main-blue flex items-center justify-between">
      <HamburgerMenu />
      <Search />
      <Cart />
      <Account />
    </div>
  );
};
