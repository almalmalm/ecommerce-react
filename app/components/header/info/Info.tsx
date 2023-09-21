import React from 'react';
import { Schedule } from './schedule/Schedule';
import { ContactUs } from './address/contact-us/ContactUs';
import { Address } from './address/Address';
import { Socials } from './socials/Socials';
import { CallUs } from './socials/CallUs';

interface IInfoProps {
  mobile?: boolean;
  custom?: boolean;
}

export const Info: React.FC<IInfoProps> = ({ mobile, custom }) => {
  if (mobile) {
    return (
      <>
        {custom && (
          <div className="h-10 bg-main-black flex items-center justify-between">
            <Schedule mobile={mobile} custom={custom} />
            <CallUs />
          </div>
        )}
        {!custom && (
          <div className="h-10 bg-main-black flex items-center">
            <Schedule mobile={mobile} />
            <ContactUs />
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className="h-11 bg-main-black flex items-center justify-between">
        <Schedule />
        <Address />
        <Socials />
      </div>
    );
  }
};
