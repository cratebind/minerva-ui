import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
// import { matchers } from 'jest-styled-components';
// expect.extend(matchers);

// ignore check styles function since we're inlining them
jest.mock('@reach/utils', () => ({
  ...jest.requireActual('@reach/utils') as any,
  checkStyles: jest.fn(),
}));

jest.mock('copy-to-clipboard', () => {
  return jest.fn();
});

jest.mock('json2mq', () => {
  return jest.fn();
});
