'use client';
import React from 'react';
import { Schedule } from './schedule/Schedule';
import { Adress } from './address/Adress';
import { Socials } from './socials/Socials';
import { useWindowSize } from '@/app/hooks/hooks';

export const Info = () => {
  const windowSize = useWindowSize();

  return (
    <div className="h-11 bg-main-black flex items-center justify-between">
      <Schedule />
      {windowSize.width > 1400 ? <Adress /> : null}
      <Socials />
    </div>
  );
};
