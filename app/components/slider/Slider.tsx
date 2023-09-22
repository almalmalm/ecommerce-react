'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import slider_img_1 from '@/public/slider_img_1.png';
import slider_img_2 from '@/public/slider_img_2.webp';
import slider_img_3 from '@/public/slider_img_3.jpg';
import slider_img_4 from '@/public/slider_img_4.jpeg';
import slider_img_5 from '@/public/slider_img_5.jpeg';
import { SliderArrow } from './SliderArrow';
import { transform } from 'typescript';

export const Slider = () => {
  const imgArr = [slider_img_1, slider_img_2, slider_img_3, slider_img_4, slider_img_5];
  const [index, setIndex] = useState(0);
  let prevIndex = index > 0 ? index - 1 : 4;
  let nextIndex = index < 4 ? index + 1 : 0;
  const [translateValue, setTranslateValue] = useState(0);
  const scrollRight = () => {
    translateValue > -400 ? setTranslateValue(translateValue - 100) : setTranslateValue(0);
  };
  const scrollLeft = () => {
    // index < 1 ? setIndex(4) : setIndex(index - 1);
    translateValue < 0 ? setTranslateValue(translateValue + 100) : setTranslateValue(-400);
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
        <div className="flex duration-700" style={{ transform: `translate(${translateValue}%)` }}>
          <Image
            src={imgArr[index].src}
            width={imgArr[index].width}
            height={imgArr[index].height}
            alt="Image"
            className="min-w-full"
          />
          <Image
            src={imgArr[index + 1].src}
            width={imgArr[index + 1].width}
            height={imgArr[index + 1].height}
            alt="Image"
            className="min-w-full"
          />
          <Image
            src={imgArr[index + 2].src}
            width={imgArr[index + 2].width}
            height={imgArr[index + 2].height}
            alt="Image"
            className="min-w-full"
          />
          <Image
            src={imgArr[index + 3].src}
            width={imgArr[index + 3].width}
            height={imgArr[index + 3].height}
            alt="Image"
            className="min-w-full"
          />
          <Image
            src={imgArr[index + 4].src}
            width={imgArr[index + 4].width}
            height={imgArr[index + 4].height}
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
