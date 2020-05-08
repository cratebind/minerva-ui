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
      >
        Something not great is happening!
      </Alert>
    </>
  );
};

export const Custom = () => (
  <>
    <Alert icon="arrow-right-circle" bg="orange.200" title="Alert!!!" />
    <br />
    <Alert icon="circle" bg="green.100">
      "Here is some information."
    </Alert>
  </>
);
