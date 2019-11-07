import React, { useState } from 'react';
import { Checkbox } from '../src/Checkbox';
import '../src/Checkbox/styles.css'

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const basic = () => {
  // import '../src/Checkbox/styles.css'
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={() => setChecked(!checked)}
    >
      Stay Logged In
    </Checkbox>
  )
};
