import React from 'react';
import {
  ThemeProvider,
  GlobalStyles,
  Alert,
  AlertClose,
  AlertTitle,
  AlertBody,
  AlertInner,
  Stack,
  Button,
  Checkbox,
  Heading,
  Icon,
  Image,
  Input,
  InputField,
  Link,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Flex,
  PseudoBox,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Spinner,
  Switch,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Tag,
  TagsInput,
  Text,
} from 'minerva-ui';

import '../css/kitchen-sink.css';

const KitchenSink = () => {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [field, setField] = React.useState('');
  const [error, setError] = React.useState('This field has an error');
  const [errorField, setErrorField] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [radio, setRadio] = React.useState('supreme');
  const [loading, setLoading] = React.useState(false);
  const [tags, setTags] = React.useState([]);
  const [inputVal, setInputVal] = React.useState('');

  const addTag = e => {
    setTags([...tags, inputVal]);
    setInputVal('');
  };

  const removeTag = index => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
  };
  return (
    <ThemeProvider>
      <GlobalStyles />
      <main className="App">
        <header className="App-header">
          <h1>
            Minerva
            <br />
            Kitchen Sink
          </h1>
        </header>

        <section className="component-wrapper">
          <h2 className="component-title">Alert</h2>
          <Stack gap="30px">
            {!alertOpen && (
              <Button onClick={() => setAlertOpen(true)}>Open Alert</Button>
            )}
            <Alert
              isOpen={alertOpen}
              onClose={() => setAlertOpen(false)}
              status="error"
              title="Whoa!"
              body="Something not great is happening!"
              canBeClosed
              closeText="Got it!"
            />
            <Alert
              status="success"
              title="Congrats!"
              body="Something great is happening!"
              canBeClosed={false}
            />
          </Stack>
        </section>
        <section className="component-wrapper">
          <h2 className="component-title">Button</h2>
          <Stack gap="30px">
            <Button>Button</Button>
            <Button>
              <Icon name="archive" />
            </Button>
            <Button>
              <Icon name="archive" /> Icon with Button
            </Button>
            <Button isLoading aria-label="loading button">
              Send
            </Button>
            <Button disabled>Disabled Button</Button>
          </Stack>
        </section>
        <section className="component-wrapper">
          <h2 className="component-title">Checkbox</h2>
          <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
            <span className="white-text">Stay Logged In</span>
          </Checkbox>
        </section>
        <section className="component-wrapper">
          <h2 className="component-title">Heading</h2>
          <Stack className="white-text">
            <Heading fontSize="2xl">2x Large Heading</Heading>
            <Heading fontSize="xl">Extra Large Heading</Heading>
            <Heading fontSize="lg">Large Heading</Heading>
            <Heading fontSize="md">Medium Heading</Heading>
            <Heading fontSize="sm">Small Heading</Heading>
            <Heading fontSize="xs">Extra Small Heading</Heading>
          </Stack>
        </section>
        <section className="component-wrapper">
          <h2 className="component-title">Icon</h2>
          <Stack horizontal gap="20px">
            <Icon name="alert-octagon" color="white" />
            <Icon name="archive" color="white" />
            <Icon name="at-sign" color="white" />
          </Stack>
        </section>
        <section className="component-wrapper">
          <h2 className="component-title">Image</h2>
          <Image
            src="https://source.unsplash.com/random"
            maxWidth="20rem"
            alt="A random picture from unsplash"
          />
        </section>
        <section className="component-wrapper">
          <h2 className="component-title">Input</h2>
          <Stack gap="30px">
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="placeholder"
              aria-label="Basic Input"
            />
            <Input
              aria-label="Disabled Input"
              disabled
              placeholder="placeholder"
            />
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="placeholder"
              aria-label="Password Input"
            />
          </Stack>
        </section>
        <section className="component-wrapper">
          <h2 className="component-title">Input Field</h2>
          <Stack gap="30px">
            <InputField label="Basic Input" className="input-label white-text">
              <Input
                style={{ color: 'black' }}
                placeholder="placeholder"
                value={field}
                onChange={e => {
                  setField(e.target.value);
                }}
              ></Input>
            </InputField>
            <InputField
              className="input-label white-text"
              label="Input With Error"
              htmlFor="basicInput"
              errorText={error}
              errorStyles={{ color: '#FF8247', size: '16px' }}
              isRequired
              requiredMarkerColor="#FF6347"
            >
              <Input
                style={{ color: 'black' }}
                id="basicInput"
                placeholder="placeholder"
                value={errorField}
                onBlur={
                  !name ? () => setError('This field cannot be empty') : null
                }
                onChange={e => {
                  setError('This field cannot be empty');
                  setErrorField(e.target.value);
                }}
              ></Input>
            </InputField>
          </Stack>
        </section>
        <section className="component-wrapper">
          <h2 className="component-title">Link</h2>
          <Stack gap="20px" className="white-text">
            <Link href="/">Home</Link>
            <Link href="https://www.github.com/cratebind/minerva-ui" isExternal>
              Minerva UI GitHub Page
            </Link>
          </Stack>
        </section>
        <section className="component-wrapper left-align">
          <h2 className="component-title">Modal</h2>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          <Modal isOpen={open} onClose={() => setOpen(false)} overflow="hidden">
            <ModalHeader onClose={() => setOpen(false)}>
              Hello World!
            </ModalHeader>
            <ModalBody>
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
              ullamco deserunt aute id consequat veniam incididunt duis in sint
              irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
              officia tempor esse quis. Sunt ad dolore quis aute consequat.
            </ModalBody>
            <ModalFooter>
              <Flex
                px={6}
                py={3}
                flexDirection={['column', 'row-reverse']}
                bg="gray.50"
                radiusBottom="5px"
              >
                <Button
                  onClick={() => setOpen(false)}
                  boxShadow="base"
                  width={['100%', 'auto']}
                >
                  Submit
                </Button>
              </Flex>
            </ModalFooter>
          </Modal>
        </section>
        <section className="component-wrapper">
          <h2 className="component-title">Psuedo Box</h2>
          <PseudoBox
            aria-label="Pseudo Box"
            as={Input}
            placeholder="Focus me"
            py={2}
            px={4}
            bg="gray.200"
            color="gray.900"
            borderColor="transparent"
            borderWidth="2px"
            rounded="md"
            outline="none"
            _focus={{ backgroundColor: '#fff', borderColor: 'purple' }}
          />
        </section>
        <section className="component-wrapper">
          <h2 className="component-title">Radio</h2>
          <Heading fontSize="lg" fontWeight={600} mb={3} className="white-text">
            Pizza Toppings
          </Heading>
          <RadioGroup
            onChange={e => setRadio(e.target.value)}
            value={radio}
            className="white-text"
          >
            <Radio value="supreme">Supreme</Radio>
            <Radio value="meat">Meat</Radio>
            <Radio value="vegetarian">Vegetarian</Radio>
          </RadioGroup>
        </section>
        <section className="component-wrapper">
          <h2 className="component-title">Select</h2>
          <Stack gap="20px">
            <Select aria-label="Select Animal">
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="other">Other</option>
            </Select>
            <Select aria-label="Disabled Select" disabled>
              Disabled Select
            </Select>
          </Stack>
        </section>

        <section className="component-wrapper left-align">
          <h2 className="component-title">Skeleton</h2>
          <span className="skeleton-title">
            <p>Skeleton Text</p>
            <Skeleton />
          </span>
          <span className="skeleton-title">
            <p>Circular Skeleton</p>
            <Skeleton height="100px" width="100px" borderRadius="full" />
          </span>
          <span className="skeleton-title">
            <p>Multi-line Skeleton with Custom Gap</p>
            <Skeleton count={3} width="500px" gap="15px" />
          </span>
          <span className="skeleton-title">
            <p>Skeleton Loading States</p>
            <Button
              mb="10px"
              onClick={() => setLoading(prevState => !prevState)}
            >
              {loading ? 'Loading...' : 'Loaded'}
            </Button>
            <div>
              {!loading ? (
                <Image
                  src="https://source.unsplash.com/nc8Qwfie-tU/400x400"
                  height="200px"
                  width="200px"
                  alt="A random picture from unsplash"
                />
              ) : (
                <Skeleton width="200px" height="200px" />
              )}
            </div>
          </span>
        </section>

        <section className="component-wrapper left-align">
          <h2 className="component-title">Spinner</h2>
          <Spinner spinnerColor="red" spinnerSize="sm" Spin />
        </section>

        <section className="component-wrapper left-align">
          <h2 className="component-title">Switch</h2>
          <Switch
            switchSize="lg"
            switchColor="pink"
            htmlFor="toggle switch"
            checked={checked}
            onChange={() => setChecked(!checked)}
          ></Switch>
        </section>

        <section className="component-wrapper">
          <h2 className="component-title">Table</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Job</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
                <TableHeaderCell />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Test</TableCell>
                <TableCell>Tester</TableCell>
                <TableCell>Testing</TableCell>
                <TableCell>Test Master</TableCell>
                <TableCell>
                  <Link>Edit</Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Test</TableCell>
                <TableCell>Tester</TableCell>
                <TableCell>Testing</TableCell>
                <TableCell>Test Master</TableCell>
                <TableCell>
                  <Link>Edit</Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section className="component-wrapper left-align">
          <h2 className="component-title">Tag</h2>
          <Stack horizontal gap="20px">
            <Tag showIcon>#photography</Tag>
            <Tag showIcon ml={2}>
              #nature
            </Tag>
            <Tag showIcon ml={2}>
              #travel
            </Tag>
          </Stack>
        </section>

        <section className="component-wrapper left-align">
          <h2 className="component-title">Tags Input</h2>
          <TagsInput
            aria-label="Tags Input"
            value={inputVal}
            tags={tags}
            onKeyDown={e => {
              if (e.key === 'Enter' && inputVal) {
                addTag();
              }
              if (e.key === 'Backspace' && !inputVal) {
                removeTag(tags.length - 1);
              }
            }}
            onChange={e => setInputVal(e.target.value)}
            onClickIcon={removeTag}
          />
        </section>

        <section className="component-wrapper left-align white-text">
          <h2 className="component-title">Text</h2>
          <Stack>
            <Text fontSize="xs">Extra Small Text</Text>
            <Text fontSize="sm">Small Text</Text>
            <Text fontSize="md">Medium Text</Text>
            <Text fontSize="lg">Large Text</Text>
            <Text fontSize="xl">Extra Large Text</Text>
            <Text fontSize="2xl">2x Large Text</Text>
          </Stack>
        </section>
      </main>
    </ThemeProvider>
  );
};

export default KitchenSink;
