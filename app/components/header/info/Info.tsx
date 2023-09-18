'use client';
import React from 'react';
import { Schedule } from './schedule/Schedule';
import { Adress } from './address/Adress';
import { Socials } from './socials/Socials';
import { useWindowSize } from '@/app/hooks/hooks';
import { Logo } from './logo/Logo';
import { ContactUs } from './address/contact-us/ContactUs';

export const Info = () => {
  const windowSize = useWindowSize();

  if (windowSize.width > 1400) {
    return (
      <div className="h-11 bg-main-black flex items-center justify-between">
        <Schedule />
        <Adress />
        <Socials />
      </div>
    );
  } else {
    return (
      <div className="h-10 bg-main-black flex items-center justify-start">
        <Logo />
        <Schedule />
        <ContactUs />
      </div>
    );
  }
};
