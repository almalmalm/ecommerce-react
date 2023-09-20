import React from 'react';
import { HamburgerModalMenuArrow } from './HamburgerModalMenuArrow';

interface IHamburgerModalMenuItemProps {
  link: string;
  name: string;
}

export const HamburgerModalMenuItem: React.FC<IHamburgerModalMenuItemProps> = ({ link, name }) => {
  return (
    <a href={link} className="flex items-center justify-between">
      <span>{name}</span>
      <HamburgerModalMenuArrow />
    </a>
  );
};
