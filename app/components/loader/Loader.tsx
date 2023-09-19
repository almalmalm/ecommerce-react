import React from 'react';

export const Loader = () => {
  return (
    <div className="animate-pulse flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-48 h-48 bg-main-blue rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="50" viewBox="0 0 19 25" fill="none">
          <path
            d="M9.74745 0.286133L0.690216 6.17961L0.690216 13.4331L9.74745 19.3266L17.0131 14.7932V16.9465L9.74745 21.7067L0.690216 15.6998L0.690216 18.3066L9.74745 24.0867L18.8047 18.3066V11.0531L11.539 15.6998V13.4331L18.8047 8.67301V6.17961L9.74745 0.286133Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
