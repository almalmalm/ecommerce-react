'use client';
import { useEffect, useState } from 'react';
import { NewProducts } from './components/products/new-products/NewProducts';
import { Slider } from './components/slider/Slider';
import { Loader } from './components/loader/Loader';

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
        <NewProducts />
      </main>
    );
  }
}
