// jscs:disable requireShorthandArrowFunctions

import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const FormFieldContainer = styled.div`
  margin: 20px;
`;

const FormInput = styled.input`
  display: block;
  margin: auto;
  height: 30px;
  width: 90%;
  border: none;
  border-bottom: 1px solid #999;
  color: #ddd;
  background-color: #3b424c;
`;

const FormSelect = FormInput.withComponent('select');

const Error = styled.div`
  height: 10px;
  margin: 0 20px;
  color: #e04c4c;
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
