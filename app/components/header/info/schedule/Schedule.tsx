import React, { useState } from 'react';
import { ScheduleModal } from './ScheduleModal';

export const Schedule = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {modal && <ScheduleModal onclick={handleModal} />}
      <div
        className="flex items-center text-mobile_small mobile:text-mobile desktop:text-xs cursor-pointer"
        onClick={handleModal}
      >
        <span className="text-main-gray font-semibold">Mon-Thu:</span>
        <span className="text-white font-semibold m-2">9:00 AM - 5:30 PM</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
          <path d="M10 5.76929L8 7.76929L6 5.76929" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
};
