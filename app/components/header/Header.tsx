'use client';
import React from 'react';
import { Info } from './info/Info';
import { Navbar } from './navbar/Navbar';
import { useWindowDimensions } from '@/app/hooks/hooks';
import { Loader } from '../loader/Loader';

export const Header = () => {
  const { width, height } = useWindowDimensions();
  if (width === undefined) {
    return <Loader />;
  } else {
    if (width < 1400) {
      return (
        <>
          <Info mobile={true} />
          <Navbar mobile={true} />
        </>
      );
    } else {
      return (
        <>
          <Info />
          <Navbar />
        </>
      );
    }
  }
};
