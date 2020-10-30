import { Box, Input } from 'minerva-ui';
import React from 'react';

function Area({
  value = '10px',
  onChange,
  containerProps,
  backgroundSize = 250,
  ...props
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      {...containerProps}
    >
      <Box {...props}>
        <svg
          width={backgroundSize}
          height={backgroundSize * 0.184}
          viewBox="0 0 250 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.3607 1L2 45.3607H248L202.631 1H46.3607Z"
            fill="#3b4c67"
            stroke="#fff"
          />
        </svg>
      </Box>
      <Input
        border={0}
        bg="transparent"
        value={value}
        onChange={onChange}
        position="absolute"
        fontSize="11px"
        color="#fff"
        width="50px"
        textAlign="center"
        padding={0}
        transform="translate(-50%, -50%)"
        left="50%"
        top="50%"
      />
    </Box>
  );
}

export default function LayoutEditor() {
  const outerEditorSize = 300;
  const innerEditorSize = 185;
  return (
    <Box position="relative">
      <Box
        width={`${outerEditorSize}px`}
        height={`${outerEditorSize}px`}
        mb={2}
        position="relative"
      >
        <Area backgroundSize={outerEditorSize} transform="rotate(180deg)" />
        <Area
          backgroundSize={outerEditorSize}
          containerProps={{
            position: 'absolute',
            right: '-40%',
            width: '100%',
            top: '40%',
          }}
          transform="rotate(-90deg)"
        />
        <Box position="absolute" bottom="1%" width="100%">
          <Area backgroundSize={outerEditorSize} />
        </Box>
        <Area
          backgroundSize={outerEditorSize}
          containerProps={{
            position: 'absolute',
            left: '-40%',
            width: '100%',
            top: '40%',
          }}
          transform="rotate(90deg)"
        />
      </Box>
      <Box position="absolute" left="15%" top="19%">
        <Box
          width={`${innerEditorSize}px`}
          height={`${innerEditorSize}px`}
          mb={2}
          position="relative"
        >
          <Area backgroundSize={innerEditorSize} transform="rotate(180deg)" />
          <Area
            backgroundSize={innerEditorSize}
            containerProps={{
              position: 'absolute',
              right: '-40%',
              width: '100%',
              top: '40%',
            }}
            transform="rotate(-90deg)"
          />
          <Box position="absolute" bottom="1%" width="100%">
            <Area backgroundSize={innerEditorSize} />
          </Box>
          <Area
            backgroundSize={innerEditorSize}
            containerProps={{
              position: 'absolute',
              left: '-40%',
              width: '100%',
              top: '40%',
            }}
            transform="rotate(90deg)"
          />
        </Box>
      </Box>
    </Box>
  );
}
