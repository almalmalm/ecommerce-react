import React from 'react';

interface IScheduleModalProps {
  onclick: () => void;
}

export const ScheduleModal: React.FC<IScheduleModalProps> = ({ onclick }) => {
  return (
    <>
      <div className="h-[15.5rem] w-screen tablet:w-[24rem] bg-white fixed z-10 top-0 left-0 flex flex-col text-[0.813rem] items-center">
        <div className="flex  pt-4">
          <div className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                d="M15 24.5642C9.72753 24.5642 5.43571 20.2724 5.43571 14.9999C5.43571 9.72747 9.72753 5.43564 15 5.43564C20.2725 5.43564 24.5643 9.72747 24.5643 14.9999C24.5643 20.2724 20.2725 24.5642 15 24.5642Z"
                stroke="black"
                strokeWidth="2.3"
              />
              <path d="M15 10.5V15.75H20.25" stroke="black" strokeWidth="2.3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col mb-[0.875rem]">
            <span className="mb-[0.438rem] text-xs">We are open:</span>
            <span className="mb-2">Mon-Thu: 9:00 AM - 5:30 PM</span>
            <span className="mb-2">Fr: 9:00 AM - 6:00 PM</span>
            <span>Sat: 11:00 AM - 5:00 PM</span>
          </div>
        </div>
        <div className="w-full h-[0.063rem] bg-second-gray"></div>
        <div className="flex py-[0.625rem] ">
          <div className="mr-[0.75rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                d="M14.5714 14.5714C13.3929 14.5714 12.4286 13.6456 12.4286 12.5142C12.4286 11.3828 13.3929 10.4571 14.5714 10.4571C15.75 10.4571 16.7143 11.3828 16.7143 12.5142C16.7143 13.6456 15.75 14.5714 14.5714 14.5714ZM21 12.7199C21 8.98622 18.1607 6.34279 14.5714 6.34279C10.9821 6.34279 8.14286 8.98622 8.14286 12.7199C8.14286 15.1268 10.2321 18.3154 14.5714 22.1211C18.9107 18.3154 21 15.1268 21 12.7199ZM14.5714 4.28564C19.0714 4.28564 23.1429 7.59764 23.1429 12.7199C23.1429 16.1348 20.2821 20.1771 14.5714 24.8571C8.86071 20.1771 6 16.1348 6 12.7199C6 7.59764 10.0714 4.28564 14.5714 4.28564Z"
                fill="black"
              />
            </svg>
          </div>
          <div>
            Address: 1234 Street Adress,
            <br /> City Address, 1234
          </div>
        </div>
        <div className="w-full h-[0.063rem] bg-second-gray"></div>
        <div className="flex flex-col pt-[0.625rem] self-center">
          <span>Phones: (00) 1234 5678</span>
          <span>E-mail: shop@email.com</span>
        </div>
      </div>
      <div className="w-screen h-screen fixed top-0 left-0 bg-modal-shadow" onClick={onclick}></div>
    </>
  );
};
