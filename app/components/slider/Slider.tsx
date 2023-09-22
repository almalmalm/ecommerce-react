'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import slider_img_1 from '@/public/slider_img_1.png';
import slider_img_2 from '@/public/slider_img_2.webp';
import slider_img_3 from '@/public/slider_img_3.jpg';
import slider_img_4 from '@/public/slider_img_4.jpeg';
import slider_img_5 from '@/public/slider_img_5.jpeg';
import { SliderArrow } from './SliderArrow';

export const Slider = () => {
  const imgArr = [slider_img_1, slider_img_2, slider_img_3, slider_img_4, slider_img_5];
  const [index, setIndex] = useState(0);
  let prevIndex = index > 0 ? index - 1 : 4;
  let nextIndex = index < 4 ? index + 1 : 0;
  const [translateValue, setTranslateValue] = useState(0);
  const scrollRight = () => {
    // index > 3 ? setIndex(0) : setIndex(index + 1);
    translateValue > 0 ? setTranslateValue(translateValue - 100) : setTranslateValue(-100);
  };
  const scrollLeft = () => {
    // index < 1 ? setIndex(4) : setIndex(index - 1);
    translateValue < 0 ? setTranslateValue(translateValue + 100) : setTranslateValue(100);
  };

  return (
    // <div className="mt-3 mx-4 mb-5 relative">
    //   <Image
    //     src={imgArr[index].src}
    //     width={imgArr[index].width}
    //     height={imgArr[index].height}
    //     alt="Image"
    //     className="min-w-full"
    //   />
    //   <SliderArrow type="right" onclick={scrollRight} />
    //   <SliderArrow type="left" onclick={scrollLeft} />
    // </div>
    <div className="mt-3 mx-4 mb-5 relative">
      <div className="overflow-hidden">
        <div className={`flex justify-center translate-x-[${translateValue}%] duration-700`}>
          <Image
            src={imgArr[prevIndex].src}
            width={imgArr[prevIndex].width}
            height={imgArr[prevIndex].height}
            alt="Image"
            className="min-w-full"
          />
          <Image
            src={imgArr[index].src}
            width={imgArr[index].width}
            height={imgArr[index].height}
            alt="Image"
            className="min-w-full"
          />
          <Image
            src={imgArr[nextIndex].src}
            width={imgArr[nextIndex].width}
            height={imgArr[nextIndex].height}
            alt="Image"
            className="min-w-full"
          />
        </div>
      </div>
      <SliderArrow type="right" onclick={scrollRight} />
      <SliderArrow type="left" onclick={scrollLeft} />
    </div>
  );
};
