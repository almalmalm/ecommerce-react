'use client';
import { useEffect, useState } from 'react';
import { NewProducts } from './components/products/new-products/NewProducts';
import { Slider } from './components/slider/Slider';
import { Advertisement } from './components/advertisement/Advertisement';
import { ProductCategory } from './components/products/product-category/ProductCategory';
import data from '@/app/data.json';
import { Brands } from './components/brands/Brands';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) {
    return (
      <main>
        <Slider />
        <NewProducts products={data.data.products.new_products} />
        <Advertisement />
        <ProductCategory
          name="Custom Builds"
          bgImgUrl='bg-[url("/image_30.jpg")]'
          products={data.data.products.custom_builds}
        />
        <ProductCategory name="Laptops" bgImgUrl='bg-[url("/image_31.jpg")]' products={data.data.products.laptops} />
        <ProductCategory name="Desktops" bgImgUrl='bg-[url("/image_32.jpg")]' products={data.data.products.laptops} />
        <ProductCategory
          name="Gaming Monitors"
          bgImgUrl='bg-[url("/image_33.jpg")]'
          products={data.data.products.laptops}
        />
        <Brands />
      </main>
    );
  }
}
