import React from 'react';
import _ from 'lodash';
import { Field } from 'redux-form';
import FormField from './FormField';

const BasicForm = ({ fields, handleSubmit, status, onSubmit, submit }) => {

  const renderFields = () =>
    _.map(fields, ({ name, label, type }) =>
      <Field
        key={ name }
        name={ name }
        label={ label }
        type={ type }
        component={ FormField }
      />
    );

  return (
    <div>
      <form onSubmit={ handleSubmit(onSubmit) }>
        { renderFields() }
        <div>{ status }</div>
        <button type="submit">{submit}</button>
      </form>
    </div>
  );
};

export default BasicForm;
