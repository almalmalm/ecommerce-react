import React from 'react';
import { ContactUs } from './contact-us/ContactUs';

export const Adress = () => {
  return (
    <div className="flex items-center">
      <span className="text-main-gray font-semibold font-xs mr-1">
        Visit our showroom in 1234 Street Adress City Address, 1234
      </span>
      <ContactUs />
    </div>
  );
};
