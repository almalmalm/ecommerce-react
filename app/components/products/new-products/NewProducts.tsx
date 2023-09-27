import React from 'react';
import { ProductCard } from '../product-card/ProductCard';
import data from '@/app/data.json';

export const NewProducts = () => {
  return (
    <div className="mx-4">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">New Products</span>
        <a href="/products" className="text-main-blue text-ten underline">
          See All New Products
        </a>
      </div>
      <div className="flex justify-center">
        {data.data.products.map((product, i) => (
          <ProductCard
            stock={product.status}
            img={product.url}
            reviews={product.reviews}
            title={product.name}
            priceOld={product.price.price_old}
            priceNew={product.price.price_new}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
