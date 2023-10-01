import React from 'react';
import { IProductCardProps } from '../product-card/ProductCard';
import { ProductSlider } from '../product-slider/ProductSlider';

interface IProductCategory {
  bgImgUrl: string;
  name: string;
  products: IProductCardProps[];
}

export const ProductCategory: React.FC<IProductCategory> = ({ bgImgUrl, name, products }) => {
  return (
    <div>
      <div
        className={`${bgImgUrl} mx-[0.938rem] h-[5.125rem] text-white flex justify-center items-center
      flex-col gap-3`}
      >
        <span className="text-lgf font-bold">{name}</span>
        <a href="#" className="text-xs underline">
          See All Products
        </a>
      </div>
      <div className="ml-4">
        <ProductSlider products={products} />
      </div>
    </div>
  );
};
