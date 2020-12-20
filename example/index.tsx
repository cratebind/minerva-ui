import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Box } from '..';
// import { Button, Box } from 'minerva-ui';

const App = () => {
  return (
    <div>
      <Button aefaefeaf="eafkeafea">Button</Button>
      <Box hello={false}>This is a box</Box>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
