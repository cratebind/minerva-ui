import React from 'react';

const Hamburger = ({ height = 24, ...props }) => {
  return (
    <svg height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="5" width="16" height="2" fill="#8E82A9" />
      <rect x="4" y="11" width="16" height="2" fill="#8E82A9" />
      <rect x="4" y="17" width="16" height="2" fill="#8E82A9" />
    </svg>
  );
};

export default Hamburger;
