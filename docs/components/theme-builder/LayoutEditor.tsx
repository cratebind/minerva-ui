import { Box, Input } from 'minerva-ui';
import React from 'react';
import { FieldType } from './Inspector';

function Area({
  value = '10px',
  onChange,
  containerProps,
  backgroundSize = 250,
  ...props
}) {
  return (
    <Box
      // display="flex"
      // alignItems="center"
      // justifyContent="center"
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
        zIndex={5000}
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

// type LayoutEditorProps = {
//   margin: {
//     left: any;
//     right: any;
//     top: any;
//     bottom: any;
//   };
//   padding: {
//     left: any;
//     right: any;
//     top: any;
//     bottom: any;
//   };
// };

type LayoutEditorProps = {
  fields: FieldType[];
  handleChange: (value: string, name: string) => void;
  values?: any;
};

// @TODO: Clean this up later once the structure is settled
export default function LayoutEditor({
  fields,
  handleChange,
  values,
}: LayoutEditorProps) {
  console.log({ values });
  const outerEditorSize = 300;
  const innerEditorSize = 185;

  const marginFields = fields.filter(field => field.name.includes('margin'));
  const paddingFields = fields.filter(field => field.name.includes('padding'));

  const [marginTop, marginRight, marginBottom, marginLeft] = marginFields;
  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = paddingFields;

  return (
    <Box position="relative">
      <Box position="absolute" left="15%" top="19%">
        <Box
          width={`${innerEditorSize}px`}
          height={`${innerEditorSize}px`}
          mb={2}
          position="relative"
          zIndex={5}
        >
          <Area
            backgroundSize={innerEditorSize}
            transform="rotate(180deg)"
            value={values[paddingTop.name]}
            onChange={e => handleChange(e.target.value, paddingTop.name)}
          />
          <Area
            backgroundSize={innerEditorSize}
            containerProps={{
              position: 'absolute',
              right: '-40%',
              // width: '100%',
              top: '40%',
            }}
            transform="rotate(-90deg)"
            value={values[paddingRight.name]}
            onChange={e => handleChange(e.target.value, paddingRight.name)}
          />
          <Box position="absolute" bottom="1%" width="100%">
            <Area
              backgroundSize={innerEditorSize}
              value={values[paddingBottom.name]}
              onChange={e => handleChange(e.target.value, paddingBottom.name)}
            />
          </Box>
          <Area
            backgroundSize={innerEditorSize}
            containerProps={{
              position: 'absolute',
              left: '-40%',
              // width: '100%',
              top: '40%',
            }}
            transform="rotate(90deg)"
            value={values[paddingLeft.name]}
            onChange={e => handleChange(e.target.value, paddingLeft.name)}
          />
        </Box>
      </Box>
      <Box
        width={`${outerEditorSize}px`}
        height={`${outerEditorSize}px`}
        mb={2}
        position="relative"
      >
        <Area
          backgroundSize={outerEditorSize}
          transform="rotate(180deg)"
          value={values[marginTop.name]}
          onChange={e => handleChange(e.target.value, marginTop.name)}
        />
        <Area
          backgroundSize={outerEditorSize}
          containerProps={{
            position: 'absolute',
            right: '-40%',
            // width: '100%',
            top: '40%',
          }}
          transform="rotate(-90deg)"
          value={values[marginRight.name]}
          onChange={e => handleChange(e.target.value, marginRight.name)}
        />
        <Box position="absolute" bottom="1%" width="100%">
          <Area
            backgroundSize={outerEditorSize}
            value={values[marginBottom.name]}
            onChange={e => handleChange(e.target.value, marginBottom.name)}
          />
        </Box>
        <Area
          backgroundSize={outerEditorSize}
          containerProps={{
            position: 'absolute',
            left: '-40%',
            // width: '100%',
            top: '40%',
          }}
          transform="rotate(90deg)"
          value={values[marginLeft.name]}
          onChange={e => handleChange(e.target.value, marginLeft.name)}
        />
      </Box>
    </Box>
  );
}
