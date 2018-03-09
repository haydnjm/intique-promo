import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { SIGNUP_FIELDS } from './fieldSets';
import { signupValidation } from './validation';
import BasicForm from './BasicForm';

const validate = signupValidation;

class SignupForm extends Component {

  componentWillUnmount() {
    this.props.clearStatus();
  };

  onSubmit = (values) => {
    this.props.emailSignup(values);
  };

  render () {
    const { handleSubmit, statusMessage } = this.props;

    return <BasicForm
             fields={SIGNUP_FIELDS}
             handleSubmit={handleSubmit}
             onSubmit={this.onSubmit}
             submit={'Sign up'}
             status={statusMessage}
           />;
  }
};

const mapStateToProps = ({ status }) => ({ statusMessage: status });

export default connect(mapStateToProps, actions)(reduxForm({
  validate,
  form: 'emailSignup',
})(SignupForm));
