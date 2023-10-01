import Image from 'next/image';
import React from 'react';
import { Rating } from './rating/Rating';

export interface IProductCardProps {
  status: string;
  url: string;
  rating?: number;
  reviews: { rating: number }[];
  name: string;
  price: {
    price_old: number;
    price_new: number;
  };
}

export const ProductCard: React.FC<IProductCardProps> = ({ status, url, reviews, name, price }) => {
  let reviewsSum = 0;
  reviews.forEach((review) => (reviewsSum += review.rating));
  const rating = parseFloat((reviewsSum / reviews.length).toFixed(1));
  return (
    <div className="w-44 h-64 text-[0.625rem] px-[0.813rem]">
      <div className="flex items-center gap-2 my-2">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
            <circle cx="5.75" cy="5" r="5" fill="#78A962" />
            <path d="M7.75 4L5.23404 7L3.75 5.27853" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
        <div className="text-main-green">{status}</div>
      </div>
      <div className="flex justify-center w-[6.25rem] h-[6.25rem]">
        <Image
          src={url}
          alt="Product image"
          width={0}
          height={0}
          sizes="100vw"
          priority={true}
          className="w-full object-contain"
        />
      </div>
      <div className="flex items-center gap-2">
        <Rating rating={rating} />
        <div className="text-main-gray">Reviews({reviews.length})</div>
      </div>
      <div className="text-mobile my-2" title={name}>
        {name.substring(0, 55)}...
      </div>
      <div className="text-fifth-gray text-xs line-through">
        ${(Math.round(price.price_old * 100) / 100).toFixed(2)}
      </div>
      <div className="text-sm text-second-black font-semibold">
        ${(Math.round(price.price_new * 100) / 100).toFixed(2)}
      </div>
    </div>
  );
};
