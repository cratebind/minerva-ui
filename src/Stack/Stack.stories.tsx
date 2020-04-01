import React from 'react';
import { Stack, Flex, Image, Text } from '..';

export default {
  title: 'Elements|Stack',
  component: Stack,
};

const Card = ({ children, direction = 'row' }) => (
  <Flex
    flexDirection={direction}
    boxShadow="lg"
    borderRadius="md"
    overflow="hidden"
    maxWidth="500px"
  >
    <Image
      src="https://tailwindcss.com/img/card-top.jpg"
      alt="Sunset in the mountains"
      maxWidth={direction === 'row' ? '150px' : '100%'}
    />
    <Flex flexDirection="column" px={6} py={4}>
      <Text fontWeight="bold" fontSize="xl" mb={2} color="gray.700">
        {children}
      </Text>
      <Text color="gray.700" lineHeight="normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </Text>
    </Flex>
  </Flex>
);

export const Basic = () => {
  return (
    <>
      <Stack>
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
      </Stack>
    </>
  );
};

export const Horizontal = () => {
  return (
    <>
      <Stack horizontal>
        <Card direction="column">Item 1</Card>
        <Card direction="column">Item 2</Card>
        <Card direction="column">Item 3</Card>
      </Stack>
    </>
  );
};

export const CustomGap = () => {
  return (
    <>
      <Stack gap="80px">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
      </Stack>
    </>
  );
};