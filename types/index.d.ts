declare var __DEV__: boolean;

declare global {
  namespace Cypress {
    interface Chainable {
      toMatchImageSnapshot: any;
    }
  }
}

interface Theme {}

declare module 'react' {
  interface Attributes {
    css?: any;
  }
}
