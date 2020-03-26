import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Skeleton, ThemeProvider } from '../src';

describe('<Skeleton />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Skeleton></Skeleton>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders skeletons equal to the number of count prop', () => {
    const { getAllByTestId } = render(
      <ThemeProvider>
        <Skeleton count={4}></Skeleton>
      </ThemeProvider>
    );

    const skeletons = getAllByTestId('skeleton');
    expect(skeletons).toHaveLength(4);
  });

  it('should take the width of its parent container if a width prop is not passed', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <div style={{ width: '350px' }}>
          <Skeleton></Skeleton>
        </div>
      </ThemeProvider>
    );

    const skeleton = getByTestId('skeleton');
    expect(skeleton).toHaveStyle('width: 100%');
  });

  it('should span the width of the width prop ', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Skeleton width="500px"></Skeleton>
      </ThemeProvider>
    );
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toHaveStyle('width: 500px');
  });

  it('should be circular in shape if passed the circle prop ', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Skeleton circle></Skeleton>
      </ThemeProvider>
    );
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toHaveStyle('border-radius: 50%');
  });
});
