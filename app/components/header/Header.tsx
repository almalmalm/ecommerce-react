'use client';
import React, { useEffect, useState } from 'react';
import { Info } from './info/Info';
import { Navbar } from './navbar/Navbar';
import { useWindowDimensions } from '@/app/hooks/hooks';
import { Loader } from '../loader/Loader';

export const Header = () => {
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);
  const [customHeader, setCustomHeader] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (width! < 1400) {
    return (
      <>
        <Info mobile={true} custom={customHeader} />
        <Navbar mobile={true} handleCustomHeaderState={(customHeader: boolean) => setCustomHeader(!customHeader)} />
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
};
