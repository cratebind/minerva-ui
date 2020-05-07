import React from 'react';
import { Alert } from '../Alert';
import Button from '../Button';

export default {
  title: 'Elements|Alert',
  component: Alert,
};

export const Statuses = () => {
  return (
    <>
      <Alert
        status="error"
        title="Whoa!"
        body="Something not great is happening."
      />
      <br />
      <Alert
        status="success"
        title="Congrats!"
        body="Something great is happening!"
      />
      <br />
      <Alert
        status="warning"
        body="Something is happening that isn't bad yet, but might be soon."
      />
      <br />
      <Alert
        status="info"
        title="Attention:"
        body="Something is happening and you should know about it."
      />
    </>
  );
};

export const Hidden = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {!open && <Button onClick={() => setOpen(true)}>Open Alert</Button>}
      <Alert
        canBeClosed
        closeText="Got it!"
        isOpen={open}
        onClose={() => setOpen(false)}
        status="error"
        title="Whoa!"
        body="Something not great is happening!"
      />
    </>
  );
};

export const Custom = () => (
  <>
    <Alert icon="arrow-right-circle" bg="orange.200" title="Alert!!!" />
    <br />
    <Alert icon="circle" bg="green.100" body="Here is some information." />
  </>
);
