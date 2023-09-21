import React, { useState } from 'react';
import { ScheduleModal } from './ScheduleModal';

interface IScheduleProps {
  mobile?: boolean;
  custom?: boolean;
}

export const Schedule: React.FC<IScheduleProps> = ({ mobile, custom }) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  if (mobile) {
    return (
      <>
        {modal && <ScheduleModal onclick={handleModal} />}
        {custom && (
          <div
            className="flex items-center text-[0.625rem] tablet:text-xs cursor-pointer ml-4 border-[0.063rem] border-fourth-gray rounded-full pl-3 pr-1"
            onClick={handleModal}
          >
            <span className="text-main-gray font-semibold">Mon-Thu:</span>
            <span className="text-white font-semibold my-1 mobile:m-1">9:00 AM - 5:30 PM</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
              <path d="M10 5.76929L8 7.76929L6 5.76929" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
        )}
        {!custom && (
          <div
            className="flex items-center text-mobile_small mobile:text-mobile desktop:text-xs cursor-pointer ml-24"
            onClick={handleModal}
          >
            <span className="text-main-gray font-semibold">Mon-Thu:</span>
            <span className="text-white font-semibold m-2">9:00 AM - 5:30 PM</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
              <path d="M10 5.76929L8 7.76929L6 5.76929" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
        )}
      </>
    );
  } else {
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
  }
};
