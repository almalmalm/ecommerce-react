import React from 'react';

interface IRatingStarProps {
  colored?: boolean;
}

export const RatingStar: React.FC<IRatingStarProps> = ({ colored }) => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
        <path
          d="M5.36081 0.173834C5.39797 0.10127 5.50168 0.10127 5.53883 0.173834L6.76524 2.56898C6.77976 2.59735 6.80694 2.61709 6.83841 2.62214L9.49531 3.04838C9.5758 3.06129 9.60785 3.15993 9.55032 3.21769L7.65138 5.12421C7.62889 5.14679 7.61851 5.17874 7.62343 5.21023L8.03908 7.8688C8.05167 7.94935 7.96777 8.01031 7.89506 7.97344L5.49504 6.75659C5.46662 6.74218 5.43303 6.74218 5.4046 6.75659L3.00459 7.97344C2.93187 8.01031 2.84797 7.94935 2.86057 7.8688L3.27621 5.21023C3.28113 5.17874 3.27075 5.14679 3.24826 5.12421L1.34933 3.21769C1.2918 3.15993 1.32384 3.06129 1.40434 3.04838L4.06124 2.62214C4.0927 2.61709 4.11988 2.59735 4.1344 2.56898L5.36081 0.173834Z"
          fill={`${colored ? '#E9A426' : '#CACDD8'}`}
        />
      </svg>
    </div>
  );
};
