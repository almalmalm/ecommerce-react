import React from 'react';
import { Schedule } from './schedule/Schedule';
import { Adress } from './address/Adress';
import { Socials } from './socials/Socials';
import { Logo } from './logo/Logo';
import { ContactUs } from './address/contact-us/ContactUs';

interface IInfoProps {
  mobile?: boolean;
}

export const Info: React.FC<IInfoProps> = ({ mobile }) => {
  if (mobile) {
    return (
      <div className="h-10 bg-main-black flex items-center justify-start">
        <Logo mobile={mobile} />
        <Schedule />
        <ContactUs />
      </div>
    );
  } else {
    return (
      <div className="h-11 bg-main-black flex items-center justify-between">
        <Schedule />
        <Adress />
        <Socials />
      </div>
    );
  }
};
