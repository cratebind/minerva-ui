import React from 'react';
import { Alert } from '..';

export default {
  title: 'Elements|Alert',
  component: Alert,
};

export const Statuses = () => {
  return (
    <>
      <Alert status="error" title="Whoa!">
        Something not great is happening
      </Alert>
      <br />
      <Alert status="success" title="Congrats!">
        Something great is happening!
      </Alert>
      <br />
      <Alert status="warning">
        Something is happening that is not bad yet, but might be soon.
      </Alert>
      <br />
      <Alert status="info" title="Attention:">
        Something is happening and you should know about it.
      </Alert>
    </>
  );
};

export const Custom = () => (
  <>
    <Alert icon="arrow-right-circle" bg="orange.200" title="Alert!!!" />
    <br />
    <Alert icon="circle" bg="green.100">
      Here is some information.
    </Alert>
  </>
);
