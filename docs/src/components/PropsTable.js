import React from 'react';

export default function PropsTable(props) {
  console.log(props);
  console.log(props.component.propTypes);
  return <div>props table</div>;
}
