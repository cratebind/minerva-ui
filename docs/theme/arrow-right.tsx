import React from 'react';

const ArrowRight = ({ height = 12, ...props }) => {
  return (
    <svg
      width="24"
      height={height}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.16026 11.5195L0.240234 10.0796L3.30025 5.99941L0.240257 1.91956L2.16023 0.479531L6.30025 5.99936L2.16026 11.5195Z"
        fill="#8E82A9"
      />
    </svg>
  );
};

export default ArrowRight;
