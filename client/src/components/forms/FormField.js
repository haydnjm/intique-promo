// jscs:disable requireShorthandArrowFunctions

import React from 'react';

export default ({ input, name, type, label, meta:{ touched, error } }) =>
<div>
  { type === 'text' || type === 'email' || type === 'password' || type === 'number' ?
    <div>
      <input
        { ...input }
        name={ name }
        type={ type }
        placeholder={ label }
      />
      <div>{ touched && error }</div>
    </div>
    :
    <div>
      <input
        { ...input }
        name={ name }
        type={ type }
        placeholder={ label }
      />
      <div>{ touched && error }</div>
    </div>
  }
</div>;
