import React from 'react';
import { Alert } from '../Alert';
import Button from '../Button';
import { X } from 'react-feather';
import { defaultIcons, defaultTheme, ThemeProvider } from '..';
// import Icon from '../Icon';

export default {
  title: 'Elements|Alert',
  component: Alert,
};

const Provider = props => (
  <ThemeProvider theme={{ ...defaultTheme, icons: defaultIcons }} {...props} />
);

export const Statuses = () => {
  return (
    <Provider>
      <Alert status="error" title="Whoa!">
        Something not great is happening.
      </Alert>
      <br />
      <Alert status="success" title="Congrats!">
        Something great is happening!
      </Alert>
      <br />
      <Alert status="warning">
        Something is happening that isn't bad yet, but might be soon.
      </Alert>
      <br />
      <Alert status="info" title="Attention:">
        Something is happening and you should know about it.
      </Alert>
    </Provider>
  );
};

export const Hidden = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Provider>
      <Button onClick={() => setOpen(true)}>Open Alert</Button>
      {open && (
        <Alert status="error" title="Whoa!">
          Something not great is happening!
          <Button
            bg="transparent"
            padding={2}
            border={0}
            name="Close Alert"
            marginLeft="auto"
            onClick={() => setOpen(false)}
          >
            <X size="20px" />
          </Button>
        </Alert>
      )}
    </Provider>
  );
};

export const Custom = () => (
  <Provider>
    <Alert icon="arrow-right-circle" bg="orange.200" title="Alert!!!" />
    <br />
    <Alert icon="info" bg="green.100">
      Here is some information.
    </Alert>
  </Provider>
);
