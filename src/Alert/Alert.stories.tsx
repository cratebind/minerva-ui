import React from 'react';
import { Alert, AlertButton } from '../Alert';
import Button from '../Button';

import { defaultIcons, defaultTheme, ThemeProvider } from '..';
import { filteredArgs } from '../utils';

const EXAMPLE_BUTTONS: Array<AlertButton> = [
  {
    buttonText: 'View Status',
  },
  {
    buttonText: 'Dismiss',
  },
];

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    ...filteredArgs,
  },
};

const Provider = props => (
  <ThemeProvider theme={{ ...defaultTheme, icons: defaultIcons }} {...props} />
);

export const Statuses = () => {
  return (
    <Provider>
      <Alert
        status="error"
        title="Whoa!"
        description="Something not great is happening."
      />
      <br />
      <Alert
        status="success"
        title="Congrats!"
        description="Something great is happening!"
      />
      <br />
      <Alert
        status="warning"
        description={`Something is happening that isn't bad yet, but might be soon.`}
      />
      <br />
      <Alert
        status="info"
        title="Attention:"
        description="Something is happening and you should know about it."
      />
    </Provider>
  );
};

export const Buttons = () => {
  return (
    <Provider>
      <Alert
        status="error"
        title="Whoa!"
        description="Something not great is happening."
        actions={EXAMPLE_BUTTONS}
      />
    </Provider>
  );
};

export const Hidden = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Provider>
      <Button onClick={() => setOpen(true)}>Open Alert</Button>
      {open && (
        <Alert
          status="error"
          title="Whoa!"
          description="Something not great is happening!"
          close
          buttonAction={() => setOpen(false)}
        />
      )}
    </Provider>
  );
};

export const HiddenWithTextButton = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Provider>
      <Button onClick={() => setOpen(true)}>Open Alert</Button>
      {open && (
        <Alert
          status="error"
          title="Whoa!"
          description="Something not great is happening!"
          close
          buttonAction={() => setOpen(false)}
          buttonText="Dismiss"
        />
      )}
    </Provider>
  );
};

export const Custom = () => (
  <Provider>
    <Alert bg="orange.200" title="Alert!" />
    <br />
    <Alert bg="green.100">Here is some information.</Alert>
  </Provider>
);
