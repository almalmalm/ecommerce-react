import React from 'react';
import { RatingStar } from './RatingStar';

interface IRatingProps {
  rating: number;
}

export const Rating: React.FC<IRatingProps> = ({ rating }) => {
  if (rating >= 1 && rating <= 2) {
    return (
      <div className="flex">
        <RatingStar colored />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
      </div>
    );
  } else if (rating >= 2 && rating <= 3) {
    return (
      <div className="flex">
        <RatingStar colored />
        <RatingStar colored />
        <RatingStar />
        <RatingStar />
        <RatingStar />
      </div>
    );
  } else if (rating >= 3 && rating <= 4) {
    return (
      <div className="flex">
        <RatingStar colored />
        <RatingStar colored />
        <RatingStar colored />
        <RatingStar />
        <RatingStar />
      </div>
    );
  } else if (rating >= 4 && rating <= 5) {
    return (
      <div className="flex">
        <RatingStar colored />
        <RatingStar colored />
        <RatingStar colored />
        <RatingStar colored />
        <RatingStar />
      </div>
    );
  } else {
    return (
      <div className="flex">
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
      </div>
    );
  }
};
