import React from 'react';
import _ from 'lodash';
import { Field } from 'redux-form';
import FormField from './FormField';
import FloatingImage from '../general/FloatingImage';
import styled, { keyframes } from 'styled-components';

const floatUp = keyframes`
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(0vh);
  }
`;

const FlexContainer = styled.div`
  flex: 1 1 0;
`;

const Form = styled.div`
  width: 450px;
  margin: auto;
  border-radius: 10px;
  padding: 30px;
  background-color: #3b424c;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.75);
  animation: ${floatUp} .3s cubic-bezier(.25,.82,.41,.99);

  @media (max-width: 450px) {
    width: 80%;
  }
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
  description,
  fields,
  handleSubmit,
  status,
  onSubmit,
  submit,
  formSubmitted,
  showImage = false,
  title,
  }) => {

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

  const renderForm = () =>
    <div>
      { title && <h3>{ title }</h3> }
      <p>{description}</p>
      <form onSubmit={ handleSubmit(onSubmit) }>
        { renderFields() }
        <SubmitButton type="submit">{submit}</SubmitButton>
      </form>
    </div>;

  const renderStatus = () => <div><h2>{ status }</h2></div>;

  return (
    <FlexContainer>
      <Form>
        {
          status ? renderStatus() : renderForm()
        }
      </Form>
    </FlexContainer>
  );
};

export default BasicForm;
