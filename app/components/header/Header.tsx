'use client';
import React, { useEffect, useState } from 'react';
import { Info } from './info/Info';
import { Navbar } from './navbar/Navbar';
import { useWindowDimensions } from '@/app/hooks/hooks';
import { Loader } from '../loader/Loader';

export const Header = () => {
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);

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
};
