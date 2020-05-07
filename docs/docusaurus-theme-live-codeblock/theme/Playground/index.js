/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import classnames from 'classnames';
import { AnimationStyles, ReachGlobalStyles } from 'minerva-ui';

import styles from './styles.module.css';

function Playground({ children, theme, transformCode, ...props }) {
  return (
    <LiveProvider
      code={children}
      transformCode={transformCode || (code => `${code};`)}
      theme={theme}
      {...props}
    >
      {/* <GlobalStyles /> */}
      <AnimationStyles />
      <ReachGlobalStyles />
      <div
        className={classnames(
          styles.playgroundHeader,
          styles.playgroundPreviewHeader
        )}
        // style={{
        //   borderTopLeftRadius: 'var(--ifm-global-radius)',
        //   borderTopRightRadius: 'var(--ifm-global-radius)'
        // }}
      >
        Preview
      </div>
      <div
        className={styles.playgroundPreview}
        style={{
          borderRadius: 0,
          // backgroundColor: 'rgb(236, 236, 236)',
          backgroundColor: '#fff',
          color: '#333',
          // marginBottom: 15,
          // borderBottom: 0,
          // borderTopLeftRadius: 'var(--ifm-global-radius)',
          // borderTopRightRadius: 'var(--ifm-global-radius)'
        }}
      >
        <LivePreview />
        <LiveError />
      </div>
      <div
        className={classnames(
          styles.playgroundHeader,
          styles.playgroundEditorHeader
        )}
      >
        Source
      </div>
      <div
        style={{
          borderBottomLeftRadius: 'var(--ifm-global-radius)',
          borderBottomRightRadius: 'var(--ifm-global-radius)',
          overflow: 'hidden',
        }}
      >
        <LiveEditor />
      </div>
    </LiveProvider>
  );
}

export default Playground;
