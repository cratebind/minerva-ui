import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
  Image,
  Block,
  Text,
  Stack,
  Icon,
  Link,
  PseudoBox,
  InputField,
  Input,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from 'minerva-ui';

export const ModalExample = props => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalHeader onClose={() => setOpen(false)}>Hello World!</ModalHeader>
        <ModalBody>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Sunt ad dolore quis aute consequat.
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpen(false)}>Submit</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const CardExamples = props => {
  return (
    <Stack>
      <Flex
        flexDirection="column"
        boxShadow="lg"
        borderRadius="md"
        maxWidth="24rem"
        overflow="hidden"
      >
        <Image
          w="100%"
          height="auto"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <Flex flexDirection="column" px={6} py={4}>
          <Text fontWeight="bold" fontSize="xl" mb={2} color="gray.700">
            The Coldest Sunset
          </Text>
          <Text color="gray.700" lineHeight="normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </Text>
        </Flex>
        <Flex px={6} py={4} flexWrap="wrap">
          <Block
            color="gray.700"
            bg="gray.200"
            borderRadius="full"
            px={3}
            py={1}
            mr={2}
            mb={1}
          >
            #photography
          </Block>
          <Block
            color="gray.700"
            bg="gray.200"
            borderRadius="full"
            px={3}
            py={1}
            mr={2}
            mb={1}
          >
            #travel
          </Block>
          <Block
            color="gray.700"
            bg="gray.200"
            borderRadius="full"
            px={3}
            py={1}
            mb={1}
          >
            #winter
          </Block>
        </Flex>
      </Flex>
      <Flex flexDirection={['column', 'row']} maxWidth="700px">
        <Block
          backgroundImage="url('https://tailwindcss.com/img/card-top.jpg')"
          radiusLeft={[0, '4px']}
          radiusTop={['4px', 0]}
          backgroundSize="cover"
          width={['100%', '30rem']}
          height={['12rem', 'auto']}
          backgroundRepeat="no-repeat"
        />
        <Block
          p="16px"
          radiusRight={[0, '4px']}
          radiusBottom={['4px', 0]}
          borderStyle="solid"
          borderWidth={1}
        >
          <Flex flexDirection="column">
            <Block mb={4}>
              <Flex fontSize="sm" color="gray.600" alignItems="center">
                <Flex mr={2} alignItems="center">
                  {/* <Icon name="lock" size="12px" /> */}
                </Flex>
                <Text m={0} fontSize="sm" color="gray.600">
                  Members only
                </Text>
              </Flex>
              <Text color="gray.900" fontWeight="bold" fontSize="xl" mb={2}>
                Can coffee make you a better developer?
              </Text>
              <Text color="gray.700" fontSize="base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </Text>
            </Block>
            <Flex alignItems="center">
              <Block
                as="img"
                size={10}
                borderRadius="full"
                mr={4}
                src="https://tailwindcss.com/img/jonathan.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <Block fontSize="sm">
                <Text m={0} color="gray.900">
                  Jonathan Reinink
                </Text>
                <Text m={0} color="gray.600">
                  Aug 18
                </Text>
              </Block>
            </Flex>
          </Flex>
        </Block>
      </Flex>
    </Stack>
  );
};

export const FormExamples = () => {
  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');

  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  return (
    <Flex>
      <PseudoBox as="form" bg="#fff" width="100%" maxWidth="20rem">
        <InputField label="Username" errorText={usernameError}>
          <Input
            placeholder="Username"
            value={username}
            onChange={e => {
              setUsernameError('');
              setUsername(e.target.value);
            }}
            onBlur={
              !username
                ? () => setUsernameError('Please enter a username.')
                : null
            }
          />
        </InputField>
        <InputField label="Password" errorText={passwordError}>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => {
              setPasswordError('');
              setPassword(e.target.value);
            }}
            onBlur={
              !password
                ? () => setPasswordError('Please enter a password.')
                : null
            }
            mb={3}
          />
        </InputField>
        <Flex alignItems="center" justifyContent="space-between">
          <Button onClick={e => e.preventDefault()}>Sign In</Button>
          <Link href="#">Forgot Password?</Link>
        </Flex>
      </PseudoBox>
    </Flex>
  );
};

export const TabsExample = ({ tabProps }) => (
  <Tabs>
    <TabList mb="20px" borderBottom="2px solid #d2d6dc">
      <Tab {...tabProps}>My Account</Tab>
      <Tab {...tabProps}>Favorites</Tab>
      <Tab {...tabProps}>Orders</Tab>
      <Tab {...tabProps}>Billing</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>My Account!</p>
      </TabPanel>
      <TabPanel>
        <p>Favorites!</p>
      </TabPanel>
      <TabPanel>
        <p>Orders!</p>
      </TabPanel>
      <TabPanel>
        <p>Billing!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
