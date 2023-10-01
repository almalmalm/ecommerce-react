import React from 'react';
import { IProductSliderProps, ProductSlider } from '../product-slider/ProductSlider';

export const NewProducts: React.FC<IProductSliderProps> = ({ products }) => {
  return (
    <div className="mx-4">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">New Products</span>
        <a href="/products" className="text-main-blue text-ten underline">
          See All New Products
        </a>
      </div>
      <ProductSlider products={products} />
    </div>
  );
};
