import React from 'react';

export const NavigationMenu = () => {
  return (
    <div className="flex gap-[1.5625rem] text-sm font-semibold items-center grow">
      <a href="/laptops">Laptops</a>
      <a href="/desktop-pcs">Desktop PCs</a>
      <a href="/networking-devices">Networking Devices</a>
      <a href="/printers-and-scanners">Printers & Scanners</a>
      <a href="/pc-parts">PC Parts</a>
      <a href="/all-other-products">All Other Products</a>
      <a href="/repairs">Repairs</a>
      <a href="/our-deals" className="text-main-blue px-[1.625rem] py-2 border-main-blue border-2 rounded-full">
        Our Deals
      </a>
    </div>
  );
};
