import React from 'react';
import { ContactUs } from './contact-us/ContactUs';

export const Address = () => {
  return (
    <div className="flex items-center">
      <span className="text-main-gray font-semibold text-xs mr-1">
        Visit our showroom in 1234 Street Address City Address, 1234
      </span>
      <ContactUs />
    </div>
  );
};
