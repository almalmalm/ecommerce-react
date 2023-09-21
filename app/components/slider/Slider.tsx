'use client';
import React, { useEffect, useState } from 'react';

export const Slider = () => {
  const [translate, setTranslate] = useState(0);
  const scrollRight = () => {
    translate > 300 ? setTranslate(400) : setTranslate(translate + 100);
  };
  const scrollLeft = () => {
    translate < 100 ? setTranslate(0) : setTranslate(translate - 100);
  };

  return (
    <div className="mt-3 mx-4 mb-5 relative">
      <div className="overflow-hidden flex">
        <div className={`flex translate-x-[-${translate}%] duration-500`}>
          <img src="/slider_img_1.png" alt="MSI banner" className="min-w-full" />
          <img src="/slider_img_2.webp" alt="MSI banner" className="min-w-full" />
          <img src="/slider_img_3.jpg" alt="MSI banner" className="min-w-full" />
          <img src="/slider_img_4.jpeg" alt="MSI banner" className="min-w-full" />
          <img src="/slider_img_5.jpeg" alt="MSI banner" className="min-w-full" />
        </div>
      </div>
      {translate > 0 && (
        <div className="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer" onClick={scrollLeft}>
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
      )}
      {translate < 400 && (
        <div className="absolute top-1/2 -translate-y-1/2 right-0 rotate-180 cursor-pointer" onClick={scrollRight}>
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
      )}
    </div>
  );
};
