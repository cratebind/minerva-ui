import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Skeleton, ThemeProvider } from '../src';

describe('<Skeleton />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <Skeleton />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders skeletons equal to the number of count prop', () => {
    const { getAllByTestId } = render(
      <ThemeProvider>
        <Skeleton count={4} />
      </ThemeProvider>
    );

    const skeletons = getAllByTestId('skeleton');
    expect(skeletons).toHaveLength(4);
  });

  it('should take the width of its parent container if a width prop is not passed', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <div style={{ width: '350px' }}>
          <Skeleton />
        </div>
      </ThemeProvider>
    );

    const skeleton = getByTestId('skeleton');
    expect(skeleton).toHaveStyleRule('width', '100%');
  });

  it('should span the width of the width prop ', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Skeleton width="500px" />
      </ThemeProvider>
    );
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toHaveStyleRule('width', '500px');
  });

  it('should be circular in shape if passed the circle prop ', () => {
    const { container, getAllByTestId } = render(
      <ThemeProvider>
        <Skeleton borderRadius="full" height="1rem" gap="20px" count={2} />
      </ThemeProvider>
    );
    const skeleton = getAllByTestId('skeleton')[0];
    expect(skeleton).toHaveStyle('border-radius: 9999px');
    expect(skeleton).toHaveStyleRule('height', '1rem');

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        box-sizing: border-box;
        min-width: 0;
        color: #374151;
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 100%;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }

      .c0 > * + * {
        margin-top: 20px;
      }

      .c1 {
        box-sizing: border-box;
        min-width: 0;
        color: #374151;
        height: 1rem;
        width: 100%;
        border-radius: 9999px;
        display: inline-block;
        background: linear-gradient(-90deg,#f0f0f0 0%,#f8f8f8 50%,#f0f0f0 100%);
        background-size: 400% 400%;
        -webkit-animation: 1.2s ease-in-out infinite alternate kYdCAA;
        animation: 1.2s ease-in-out infinite alternate kYdCAA;
      }

      .c1::before {
        content: '\\00a0';
      }

      <div>
        <div
          class="sc-AxjAm sc-AxiKw c0"
        >
          <div
            class="sc-AxjAm c1"
            data-testid="skeleton"
          />
          <div
            class="sc-AxjAm c1"
            data-testid="skeleton"
          />
        </div>
      </div>
    `);
  });
});
