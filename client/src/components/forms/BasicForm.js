import React from 'react';
import _ from 'lodash';
import { Field } from 'redux-form';
import FormField from './FormField';

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
    <div>
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

    </div>
  );
};

export default BasicForm;
