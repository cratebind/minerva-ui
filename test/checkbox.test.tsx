import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Checkbox } from '../src';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
