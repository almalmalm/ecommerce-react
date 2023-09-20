import React from 'react';

interface IHamburgerModalProps {
  onclick: () => void;
}

export const HamburgerModal: React.FC<IHamburgerModalProps> = ({ onclick }) => {
  return (
    <>
      <div className="h-screen w-4/5 fixed bg-white z-10 top-0 left-0 p-5">
        <div className="flex justify-between items-center">
          <div>
            <svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.0331 0.945374L0.296875 10.8637V23.0708L17.0331 32.9891L30.4588 25.3596V28.9836L17.0331 36.9946L0.296875 26.8855V31.2725L17.0331 41L33.7693 31.2725V19.0653L20.3435 26.8855V23.0708L33.7693 15.0599V10.8637L17.0331 0.945374Z"
                fill="#0156FF"
              />
            </svg>
          </div>
          <div onClick={onclick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
              <path d="M1.80585 1L13.7258 12.9199" stroke="black" strokeWidth="2" strokeLinecap="round" />
              <path d="M13.7258 1L1.80585 12.9199" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen fixed top-0 left-0 bg-modal-shadow" onClick={onclick}></div>
    </>
  );
};
