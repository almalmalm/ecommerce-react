'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import slider_img_1 from '@/public/slider_img_1.png';
import slider_img_2 from '@/public/slider_img_2.webp';
import slider_img_3 from '@/public/slider_img_3.jpg';
import slider_img_4 from '@/public/slider_img_4.jpeg';
import slider_img_5 from '@/public/slider_img_5.jpeg';
import { SliderArrow } from './SliderArrow';

export const Slider = () => {
  const imgArr = [slider_img_1, slider_img_2, slider_img_3, slider_img_4, slider_img_5];
  const [translateValue, setTranslateValue] = useState(0);
  const scrollRight = () => {
    translateValue > -400 ? setTranslateValue(translateValue - 100) : setTranslateValue(-400);
  };
  const scrollLeft = () => {
    translateValue < 0 ? setTranslateValue(translateValue + 100) : setTranslateValue(0);
  };

  return (
    <div className="mt-3 mx-4 mb-5 relative">
      <div className="overflow-hidden">
        <div className="flex duration-700" style={{ transform: `translate(${translateValue}%)` }}>
          {imgArr.map((img, i) => (
            <Image
              src={imgArr[i].src}
              width={imgArr[i].width}
              height={imgArr[i].height}
              alt="Image"
              className="min-w-full"
              key={i}
              priority={true}
            />
          ))}
        </div>
      </div>
      {translateValue < 0 && <SliderArrow type="left" onclick={scrollLeft} />}
      {translateValue > -400 && <SliderArrow type="right" onclick={scrollRight} />}
    </div>
  );
};
