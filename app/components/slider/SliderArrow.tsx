import React from 'react';

interface ISlideArrowProps {
  type: string;
  onclick: () => void;
}

export const SliderArrow: React.FC<ISlideArrowProps> = ({ type, onclick }) => {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 ${
        type === 'right' ? 'rotate-180 right-0' : 'left-0'
      } cursor-pointer`}
      onClick={onclick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="60" viewBox="0 0 35 60" fill="none">
        <path
          opacity="0.5"
          d="M0 11.3926H9.16345C19.2304 11.3926 27.3913 19.5535 27.3913 29.6204C27.3913 39.6874 19.2304 47.8483 9.16345 47.8483H0V11.3926Z"
          fill="#252931"
        />
        <path
          d="M12.9517 27.3081L10.6353 29.6203L12.9517 31.9324"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
