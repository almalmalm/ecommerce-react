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
  onHeaderLogoStateChange?: (headerLogoState: boolean) => boolean;
}

export const Navbar: React.FC<INavbarProps> = ({ mobile, onHeaderLogoStateChange }) => {
  const [searchOpened, setSearchOpened] = useState(false);
  const openSearch = () => {
    setSearchOpened(!searchOpened);
  };

  if (mobile) {
    return (
      <>
        {searchOpened && (
          <div className="h-[6.875rem] bg-main-blue">
            <div className="flex items-center py-3 justify-between">
              <HamburgerMenu />
              <Logo mobile={mobile} custom={true} />
              <a
                href="/our-deals"
                className="text-white px-[1.625rem] py-[0.375rem] border-white border-2 rounded-full w-fit font-semibold mr-[1.375rem]"
              >
                Our Deals
              </a>
              <Cart mobile={mobile} />
              <Account mobile={mobile} />
            </div>
            <Search mobile={mobile} searchState={searchOpened} searchFunction={openSearch} />
          </div>
        )}
        {!searchOpened && (
          <div className="h-16 bg-main-blue flex items-center justify-between">
            <HamburgerMenu />
            <Search mobile={mobile} searchState={searchOpened} searchFunction={openSearch} />
            <Cart mobile={mobile} />
            <Account mobile={mobile} />
          </div>
        )}
      </>
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
