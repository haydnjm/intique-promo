// jscs:disable requireShorthandArrowFunctions

import React from 'react';
import _ from 'lodash';

export default ({ input, name, type, label, selectOptions, meta:{ touched, error } }) =>

  <div>
    { type === 'text' || type === 'email' ?
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
      type === 'select' ?
        <div>
          <select { ...input } name={ name } type='select'>
            <option value={ name }>{ label }</option>
            { _.map(selectOptions, (value, key) => {
              return <option value={ value } key={ value }>{ value }</option>;
            })}
          </select>
          <div>{ touched && error }</div>
        </div>
        :
      type === 'hidden' ?
      <input
        { ...input }
        type={ type }
      />
        :
        <h1>NOT FOUND FIELD TYPE</h1>
    }
  </div>;
