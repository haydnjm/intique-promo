import React from 'react';
import _ from 'lodash';
import { Field } from 'redux-form';
import FormField from './FormField';
import styled from 'styled-components';

const Form = styled.div`
  width: 450px;
  margin: auto;
  border-radius: 10px;
  padding: 30px;
  background-color: #3b424c;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.75);
`;

const BasicForm = ({
  fields,
  handleSubmit,
  status,
  onSubmit,
  submit,
  isLoading,
  formSubmitted, }) => {

  const renderFields = () =>
    _.map(fields, ({ name, label, type, selectOptions }) =>
      <Field
        key={ name }
        name={ name }
        label={ label }
        type={ type }
        selectOptions={ selectOptions }
        component={ FormField }
      />
    );

  return (
    <Form>
      { !formSubmitted ?
        <form onSubmit={ handleSubmit(onSubmit) }>
          { renderFields() }
          {
            isLoading ?
            <span>Loading...</span>
            :
            <button type="submit">{submit}</button>
          }
          <div>{ status }</div>
        </form>
        :
        <h3>FORM SUBMITTED</h3>
      }
    </Form>
  );
};

export default BasicForm;
