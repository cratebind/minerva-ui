/// <reference types="react" />
export declare const liveEditorStyle: {
  fontSize: number;
  marginBottom: number;
  marginTop: number;
  fontFamily: string;
  borderRadius: number;
  padding: number;
};
export declare const liveErrorStyle: {
  fontFamily: string;
  fontSize: number;
  padding: string;
  color: string;
  backgroundColor: string;
};
declare const CodeBlock: {
  ({ className, live, isManual, render, children, ...props }: any): JSX.Element;
  defaultProps: {
    mountStylesheet: boolean;
  };
  displayName: string;
  __docgenInfo: {
    description: string;
    displayName: string;
    props: {};
  };
};

declare module '@mdx-js/react';

export default CodeBlock;
