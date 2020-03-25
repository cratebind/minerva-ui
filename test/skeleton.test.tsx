import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
// import * as ReactDOM from 'react-dom';
import { Skeleton } from '../src';
import { ThemeProvider } from 'styled-components';

describe('Skeleton', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Skeleton />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });

  it('renders skeletons equal to the number of count prop', () => {
    const { getByTestId } = render(<ThemeProvider><Skeleton count={4}></Skeleton></ThemeProvider>);

    const skeletons = getByTestId('skeleton');
    console.log('SKELETONS', skeletons)
    expect(skeletons).toHaveLength(4);
  });

  it('should take the width of its parent container if a width prop is not passed', () => {
    const { getByTestId } = render(
      <div style={{ width: '350px' }}>
        <Skeleton></Skeleton>
      </div>
    );

    const skeleton = getByTestId('skeleton');
    expect(skeleton).toHaveStyle('width: 350px');
  });
});
