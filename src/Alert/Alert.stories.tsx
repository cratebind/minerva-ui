import React from 'react';
import { Alert, AlertActions, AlertProps } from '../Alert';
import Button from '../Button';

import { defaultIcons, defaultTheme, ThemeProvider } from '..';
import { filteredArgs } from '../utils';

const ALERT_BUTTONS_EXAMPLE: AlertActions = [
  {
    buttonText: 'View Status',
  },
  {
    buttonText: 'Dismiss',
  },
];

const ALERT_EXAMPLE: Array<AlertProps> = [
  {
    status: 'error',
    title: 'Error',
    children: 'Something not great is happening.',
  },
  {
    status: 'success',
    title: 'Success',
    children: 'Something great is happening!',
  },
  {
    status: 'warning',
    title: 'Warning',
    children: `Something is happening that isn't bad yet, but might be soon.`,
  },
  {
    status: 'info',
    title: 'Info',
    children: 'Something is happening and you should know about it.',
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
      {ALERT_EXAMPLE.map((alert, index, array) => (
        <>
          <Alert key={index} {...alert} />
          {index + 1 < array.length && <br />}
        </>
      ))}
    </Provider>
  );
};

export const WithActionButtons = () => {
  return (
    <Provider>
      <Alert
        status="error"
        title="Whoa!"
        children="Something not great is happening."
        actions={ALERT_BUTTONS_EXAMPLE}
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
          children="Something not great is happening!"
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
          children="Something not great is happening!"
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
    <Alert
      bg="green.100"
      children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ante vitae eros suscipit pulvinar. "
    />
  </Provider>
);
