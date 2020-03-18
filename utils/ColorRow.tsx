import React from 'react';
import { Box, Block, Flex, Text, ThemeProvider, defaultTheme } from '../src';

export default function ColorRow({ color, name }) {
  const [colorGroup, colorValue] = color.split('.'); // convert values like `teal.500` into ['teal', '500']
  return (
    <ThemeProvider>
      <Flex
        boxShadow="base"
        px={6}
        py={4}
        bg="#f7fafc"
        borderRadius="lg"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Block
            size="48px"
            bg={color}
            shadow="md"
            borderRadius="full"
            mr={4}
          />
          <Text fontSize="16px">{name}</Text>
        </Flex>
        <Flex>
          <Box>
            <Box
              bg="#e2e8f0"
              color="#2d3748"
              py="3px"
              px="8px"
              display="inline"
              borderRadius="default"
              mr={2}
              textTransform="uppercase"
              fontSize="12px"
            >
              VALUE
            </Box>
            <code>{color}</code>
          </Box>
          <Box>
            <Box
              bg="#e2e8f0"
              color="#2d3748"
              py="3px"
              px="8px"
              display="inline"
              borderRadius="default"
              mr={2}
              ml={4}
              textTransform="uppercase"
              fontSize="12px"
            >
              HEX
            </Box>
            {defaultTheme.colors[colorGroup][colorValue]}
          </Box>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}
