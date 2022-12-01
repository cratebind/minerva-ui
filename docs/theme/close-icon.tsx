import React from 'react';

const CloseIcon = ({ height = 12, ...props }) => {
  return (
    <svg height={height} viewBox="0 0 12 12" fill="none" {...props}>
      <path
        d="M6.00009 7.6991L9.95156 11.6506L11.6486 9.95352L7.69715 6.00204L11.6486 2.05057L9.95156 0.353516L6.00009 4.30499L2.04862 0.353516L0.351562 2.05057L4.30303 6.00204L0.351562 9.95352L2.04862 11.6506L6.00009 7.6991Z"
        fill="#130F1C"
      />
    </svg>
  );
};

export default CloseIcon;
