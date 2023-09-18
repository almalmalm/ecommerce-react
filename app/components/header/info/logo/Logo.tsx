import { useWindowSize } from '@/app/hooks/hooks';
import React from 'react';

export const Logo = () => {
  const windowSize = useWindowSize();

  return (
    <div className="h-full flex items-end ml-3">
      {windowSize.width > 1020 ? (
        <svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.0331 0.945374L0.296875 10.8637V23.0708L17.0331 32.9891L30.4588 25.3596V28.9836L17.0331 36.9946L0.296875 26.8855V31.2725L17.0331 41L33.7693 31.2725V19.0653L20.3435 26.8855V23.0708L33.7693 15.0599V10.8637L17.0331 0.945374Z"
            fill="#0156FF"
          />
        </svg>
      ) : (
        <div className="bg-main-blue w-16 h-9 flex justify-center rounded-t-full pt-1">
          <svg width="46" height="41" viewBox="0 0 46 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.7474 8.28613L13.6902 14.1796V21.4331L22.7474 27.3266L30.0131 22.7932V24.9465L22.7474 29.7067L13.6902 23.6998V26.3066L22.7474 32.0867L31.8047 26.3066V19.0531L24.539 23.6998V21.4331L31.8047 16.673V14.1796L22.7474 8.28613Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
