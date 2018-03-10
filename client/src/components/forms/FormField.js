// jscs:disable requireShorthandArrowFunctions

import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const FormFieldContainer = styled.div`
  margin: 20px;
`;

const FormInput = styled.input`
  height: 30px;
  width: 300px;
  padding-left: 10px;
  border-radius: 5px;
`;

const FormSelect = styled.select`
  height: 30px;
  width: 300px;
  padding-left: 10px;
  border-radius: 5px;
`;

const Error = styled.div`
  height: 10px;
  color: #e04c4c;
  text-shadow: 0 0px 1px rgba(224, 76, 76, 0.75);
`;

export default ({ input, name, type, label, selectOptions, meta:{ touched, error } }) =>

  <FormFieldContainer>
    { type === 'text' || type === 'email' ?
      <div>
        <FormInput
          { ...input }
          name={ name }
          type={ type }
          placeholder={ label }
        />
        <Error>{ touched && error }</Error>
      </div>
      :
      type === 'select' ?
        <div>
          <FormSelect { ...input } name={ name } type='select'>
            <option value={ name }>{ label }</option>
            { _.map(selectOptions, (value, key) => {
              return <option value={ value } key={ value }>{ value }</option>;
            })}
          </FormSelect>
          <Error>{ touched && error }</Error>
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
  </FormFieldContainer>;
