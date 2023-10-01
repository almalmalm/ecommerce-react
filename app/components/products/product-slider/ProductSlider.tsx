import React from 'react';
import data from '@/app/data.json';
import { ProductCard } from '../product-card/ProductCard';
import { IProductCardProps } from '../product-card/ProductCard';

export interface IProductSliderProps {
  products: IProductCardProps[];
}
export const ProductSlider: React.FC<IProductSliderProps> = ({ products }) => {
  return (
    <div className="flex justify-center">
      {products.map((product, i) => (
        <ProductCard
          status={product.status}
          url={product.url}
          reviews={product.reviews}
          name={product.name}
          price={product.price}
          key={i}
        />
      ))}
    </div>
  );
};
