import Image from 'next/image';
import React from 'react';

export const Brands = () => {
  return (
    <div className="flex flex-wrap mx-[0.938rem]">
      <Image src="/brand_1.png" alt="Brand logo" width={0} height={0} sizes="100vw" className="w-1/2 p-6" />
      <Image src="/brand_2.png" alt="Brand logo" width={0} height={0} sizes="100vw" className="w-1/2 p-6" />
      <Image src="/brand_3.png" alt="Brand logo" width={0} height={0} sizes="100vw" className="w-1/2 p-6" />
      <Image src="/brand_4.png" alt="Brand logo" width={0} height={0} sizes="100vw" className="w-1/2 p-6" />
      <Image src="/brand_5.png" alt="Brand logo" width={0} height={0} sizes="100vw" className="w-1/2 p-6" />
      <Image src="/brand_6.png" alt="Brand logo" width={0} height={0} sizes="100vw" className="w-1/2 p-6" />
      <Image src="/brand_7.png" alt="Brand logo" width={0} height={0} sizes="100vw" className="w-1/2 p-6" />
    </div>
  );
};
