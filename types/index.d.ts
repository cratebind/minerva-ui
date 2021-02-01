declare var __DEV__: boolean;

declare global {
  namespace Cypress {
    interface Chainable {
      toMatchImageSnapshot: any;
    }
  }
}

declare module 'react' {
  interface DOMAttributes {
    css?: any;
  }
}
