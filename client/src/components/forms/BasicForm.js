import React from 'react';
import _ from 'lodash';
import { Field } from 'redux-form';
import FormField from './FormField';
import styled, { keyframes } from 'styled-components';

const floatUp = keyframes`
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(0vh);
  }
`;

const Form = styled.div`
  width: 450px;
  margin: auto;
  border-radius: 10px;
  padding: 30px;
  background-color: #3b424c;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.75);

  animation: ${floatUp} .3s cubic-bezier(.25,.82,.41,.99);
`;

const SubmitButton = styled.button`
  display: block;
  width: 100px;
  height: 35px;
  text-align: center;
  border: 3px solid #eddd4f;
  border-radius: 10px;
  background-color: #3b424c;
  color: #eddd4f;
  margin: auto;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color : #eddd4f;
    color: #3b424c;
  }
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
            <SubmitButton type="submit">{submit}</SubmitButton>
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
