export * from 'react';

declare module 'react' {
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<any>;
  }
}
