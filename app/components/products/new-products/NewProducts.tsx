import React from 'react';
import { ProductCard } from '../product-card/ProductCard';
import iphone_img from '@/public/iphone_image.jpeg';

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
        <ProductCard
          stock="in stock"
          img={iphone_img}
          reviews={0}
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          priceOld={499.0}
          priceNew={499.0}
        />
        <ProductCard
          stock="in stock"
          img={iphone_img}
          reviews={0}
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          priceOld={499.0}
          priceNew={499.0}
        />
      </div>
    </div>
  );
};
